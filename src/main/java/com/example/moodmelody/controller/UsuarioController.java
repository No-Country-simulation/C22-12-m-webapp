package com.example.moodmelody.controller;

import com.example.moodmelody.dto.DtoRegistrarUsuario;
import com.example.moodmelody.dto.DtoRespuestaRegistro;
import com.example.moodmelody.entity.Usuario;
import com.example.moodmelody.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity guardarUsuario(@RequestBody DtoRegistrarUsuario dtoRegistrarUsuario,UriComponentsBuilder uriComponentsBuilder){

        Usuario usuario = usuarioService.guardarUsuario(new Usuario(dtoRegistrarUsuario));
        DtoRespuestaRegistro datosRespuestaRegistro = new DtoRespuestaRegistro(usuario.getId(),usuario.getNombre(), usuario.getApodo(), usuario.getApellido(), usuario.getEmail());

        URI url = uriComponentsBuilder.path("/usuario/{id}").buildAndExpand(usuario.getId()).toUri();
        return ResponseEntity.created(url).body(datosRespuestaRegistro);
    }

}
