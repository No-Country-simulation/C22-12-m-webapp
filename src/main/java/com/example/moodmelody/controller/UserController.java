package com.example.moodmelody.controller;

import com.example.moodmelody.dto.DtoRegisterUser;
import com.example.moodmelody.dto.DtoResponseRegister;
import com.example.moodmelody.entity.Users;
import com.example.moodmelody.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UsersService usersService;

    @RequestMapping("/register")
    @PostMapping
    public ResponseEntity saveUser(@RequestBody DtoRegisterUser dtoRegisterUser, UriComponentsBuilder uriComponentsBuilder){

        Users users = usersService.saveUser(new Users(dtoRegisterUser));
        DtoResponseRegister dtoResponseRegister = new DtoResponseRegister(users.getId(), users.getName(), users.getNickName(), users.getLastName(), users.getEmail());

        URI url = uriComponentsBuilder.path("/user/{id}").buildAndExpand(users.getId()).toUri();
        return ResponseEntity.created(url).body(dtoResponseRegister);
    }

    

}
