package com.example.moodmelody.service;

import com.example.moodmelody.entity.Users;
import com.example.moodmelody.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.michaelthelin.spotify.model_objects.specification.User;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    public Users saveUser(Users users){
        return usersRepository.save(users);
    }

    public Users getUserById(Long id){
         return usersRepository.getById(id);
    }
}
