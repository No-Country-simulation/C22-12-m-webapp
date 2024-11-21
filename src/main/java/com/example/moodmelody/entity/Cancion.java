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
@Table
public class Cancion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String imagen;
    private String nombre;
    private String artista;
    private Integer duracion;
    private boolean explicita;
    @ManyToOne
    @JoinColumn(name = "lista_reproduccion_id", nullable = false)
    private ListaReproduccion listaReproduccion;
}
