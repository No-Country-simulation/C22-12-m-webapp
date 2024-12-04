package com.example.moodmelody.controller;

import com.example.moodmelody.entity.Users;
import com.example.moodmelody.service.UsersService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Base64;

@RequestMapping("/auth/spotify/callback")
@RestController
public class SpotifyCallbackController {

    @Value("${spotify.client-id}")
    private String CLIENT_ID;

    @Value("${spotify.client-secret}")
    private String CLIENT_SECRET;

    private static final String REDIRECT_URI = "http://localhost:8080/auth/spotify/callback";

    @Autowired
    private UsersService usersService;

    @PostMapping
    public ResponseEntity<String> spotifyCallback(@RequestParam String code, @RequestParam Long id) throws Exception {
        String tokenUrl = "https://accounts.spotify.com/api/token";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        String credentials = CLIENT_ID + ":" + CLIENT_SECRET;
        String base64Credentials = Base64.getEncoder().encodeToString(credentials.getBytes());

        HttpHeaders authHeaders = new HttpHeaders();
        authHeaders.set("Authorization", "Basic " + base64Credentials);
        authHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("code", code);
        body.add("redirect_uri", REDIRECT_URI);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, authHeaders);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(tokenUrl, HttpMethod.POST, request, String.class);
        String responseBody = response.getBody();

        JSONObject jsonObject = new JSONObject(responseBody);
        String accessToken = jsonObject.getString("access_token");

        Users user = usersService.getUserById(id);
        user.setSpotifyAccessToken(accessToken);
        usersService.saveUser(user);

        return ResponseEntity.ok("Usuario logueado exitosamente con Spotify.");
    }
}


