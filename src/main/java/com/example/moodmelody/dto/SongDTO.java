package com.example.moodmelody.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SongDTO {
    private String name;
    private String artist;
    private Integer duration;
    private boolean explicit;
    private String image;


}
