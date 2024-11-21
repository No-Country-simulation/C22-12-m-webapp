package com.example.moodmelody.service;

import com.example.moodmelody.dto.DtoRegistrarUsuario;
import com.example.moodmelody.entity.Usuario;
import com.example.moodmelody.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario guardarUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
}
