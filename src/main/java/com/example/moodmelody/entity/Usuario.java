package com.example.moodmelody.entity;

import com.example.moodmelody.dto.DtoRegistrarUsuario;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private String apodo;
    private String apellido;
    private int edad;
    private String email;
    private String contraseña;
    @OneToMany
    private List<ListaReproduccion> listasDeReproduccion;

    public Usuario (DtoRegistrarUsuario dtoRegistrarUsuario) {
        this.nombre = dtoRegistrarUsuario.nombre();
        this.apodo = dtoRegistrarUsuario.apodo();
        this.apellido = dtoRegistrarUsuario.apellido();
        this.edad = dtoRegistrarUsuario.edad();
        this.email = dtoRegistrarUsuario.email();
        this.contraseña = dtoRegistrarUsuario.contraseña();
    }
}
