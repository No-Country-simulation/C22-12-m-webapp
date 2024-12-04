package com.example.moodmelody.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth/spotify")
@RestController
public class SpotifyAuthController {

    @Value("${spotify.client-id}")
    private String CLIENT_ID;

    @Value("${spotify.client-secret}")
    private String CLIENT_SECRET;

    private static final String REDIRECT_URI = "http://localhost:8080/auth/spotify/callback"; // Cambia por tu URI de redirección
    private static final String SPOTIFY_API_URL = "https://accounts.spotify.com/authorize";

    @GetMapping
    public ResponseEntity<String> authenticateUser() {
        String authorizeUrl = SPOTIFY_API_URL + "?client_id=" + CLIENT_ID
                + "&response_type=code"
                + "&redirect_uri=" + REDIRECT_URI
                + "&scope=user-library-read playlist-read-private user-top-read"; // Ajusta los scopes según lo que necesites

        return ResponseEntity.status(HttpStatus.FOUND)
                .header(HttpHeaders.LOCATION, authorizeUrl)
                .build();
    }
}

