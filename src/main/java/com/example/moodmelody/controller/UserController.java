package com.example.moodmelody.controller;

import com.example.moodmelody.dto.*;
import com.example.moodmelody.entity.Users;
import com.example.moodmelody.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UsersService usersService;

    @RequestMapping("/register")
    @PostMapping
    public ResponseEntity<?> saveUser(@RequestBody DtoRegisterUser dtoRegisterUser, UriComponentsBuilder uriComponentsBuilder) {
        Users users = usersService.saveUser(new Users(dtoRegisterUser));
        DtoResponseRegister dtoResponseRegister = new DtoResponseRegister(
                users.getId(),
                users.getName(),
                users.getNickName(),
                users.getLastName(),
                users.getEmail()
        );
        return ResponseEntity.ok(new ApiResponse("Usuario registrado exitosamente", dtoResponseRegister));
    }



    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody DtoLoginRequest dtoLoginRequest) {
        Users user = usersService.getUserByEmail(dtoLoginRequest.getEmail());

        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("El usuario no existe"));
        }
        if (!user.getPassword().equals(dtoLoginRequest.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse("Contraseña incorrecta"));
        }
        DtoResponseLogin dtoResponseLogin = new DtoResponseLogin(
                user.getId(),
                user.getName(),
                user.getNickName(),
                user.getEmail()
        );
        return ResponseEntity.ok(new ApiResponse("Inicio de sesión exitoso", dtoResponseLogin));
    }
}
