package com.example.moodmelody.controller;

import com.example.moodmelody.dto.ListReproductionDTO;
import com.example.moodmelody.dto.SongDTO;
import com.example.moodmelody.dto.SpotifyRecommendationsDTO;
import com.example.moodmelody.entity.ListReproduction;
import com.example.moodmelody.entity.Users;
import com.example.moodmelody.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/user/spotify/recommendations")
@RestController
public class SpotifyRecommendationController {

    @Autowired
    private UsersService usersService;

    @GetMapping
    public ResponseEntity<List<ListReproductionDTO>> getRecommendations(@RequestParam Long userId, @RequestParam String mood) {
        Users user = usersService.getUserById(userId);
        String accessToken = user.getSpotifyAccessToken();

        // Aquí puedes ajustar los parámetros según el estado de ánimo (mood)
        String recommendationsUrl = "https://api.spotify.com/v1/recommendations?limit=10&seed_genres=pop&target_danceability=0.7&target_valence=0.8"; // Ejemplo

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        // Hacer la solicitud y recibir la respuesta como SpotifyRecommendationsDTO
        ResponseEntity<SpotifyRecommendationsDTO> response = restTemplate.exchange(
                recommendationsUrl,
                HttpMethod.GET,
                entity,
                SpotifyRecommendationsDTO.class
        );

        // Crear una nueva lista de reproducción (ListReproduction)
        ListReproduction listReproduction = new ListReproduction();
        listReproduction.setName("Recomendaciones de Spotify");
        listReproduction.setUsers(user);  // Asociar con el usuario actual

        // Mapear las recomendaciones de Spotify a las entidades Song
        List<SongDTO> songDTOs = response.getBody().getTracks().stream().map(trackDTO -> {
            SongDTO songDTO = new SongDTO();
            songDTO.setName(trackDTO.getName());
            songDTO.setArtist(trackDTO.getArtist().getName());
            songDTO.setExplicit(false);  // O puedes usar alguna lógica para establecer si es explícita
            songDTO.setDuration(trackDTO.getDuration_ms() / 1000);  // Spotify devuelve la duración en milisegundos
            songDTO.setImage(trackDTO.getAlbumImage());  // Coloca una imagen por defecto o usa la de Spotify

            return songDTO;
        }).collect(Collectors.toList());

        // Crear el ListReproductionDTO
        ListReproductionDTO listReproductionDTO = new ListReproductionDTO();
        listReproductionDTO.setName(listReproduction.getName());
        listReproductionDTO.setSongs(songDTOs);

        return ResponseEntity.ok(Collections.singletonList(listReproductionDTO));
    }
}
