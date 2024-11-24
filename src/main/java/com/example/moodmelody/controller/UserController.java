package com.example.moodmelody.controller;

import com.example.moodmelody.dto.DtoRegisterUser;
import com.example.moodmelody.dto.DtoResponseRegister;
import com.example.moodmelody.entity.User;
import com.example.moodmelody.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity saveUser(@RequestBody DtoRegisterUser dtoRegisterUser, UriComponentsBuilder uriComponentsBuilder){

        User user = userService.saveUser(new User(dtoRegisterUser));
        DtoResponseRegister dtoResponseRegister = new DtoResponseRegister(user.getId(),user.getName(), user.getNickName(), user.getLastName(), user.getEmail());

        URI url = uriComponentsBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri();
        return ResponseEntity.created(url).body(dtoResponseRegister);
    }

}
