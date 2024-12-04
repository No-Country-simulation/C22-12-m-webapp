package com.example.moodmelody.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "song")
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String image;
    private String name;
    private String artist;
    private Integer duration;
    private boolean explicit;
    @ManyToOne
    @JoinColumn(name = "list_reproduction_id", nullable = false)
    private ListReproduction listReproduction;
}
