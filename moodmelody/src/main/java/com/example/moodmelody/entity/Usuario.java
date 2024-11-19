package com.example.moodmelody.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Usuario {
    String nombre;
    String apellido;
    String edad;
    String email;
    String contraseña;
}
