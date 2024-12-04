package com.example.moodmelody.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrackDTO {
    private String name;
    private ArtistDTO artist;
    private Integer duration_ms;
    private String albumImage;

}
