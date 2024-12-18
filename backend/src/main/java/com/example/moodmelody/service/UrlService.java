package com.example.moodmelody.service;
import com.example.moodmelody.entity.ListReproduction;
import com.example.moodmelody.entity.Users;
import com.example.moodmelody.repository.UrlRepository;
import com.example.moodmelody.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UrlService {

    @Autowired
    private UrlRepository urlRepository;

    @Autowired
    private UsersRepository usersRepository;

    public ListReproduction saveUrl(String url, Long userId) {
        Users user = usersRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        ListReproduction listReproduction = new ListReproduction(null, url, user);

        return urlRepository.save(listReproduction);
    }
    public List<ListReproduction> findAllUrlsByUserId(Long userId) {
        return usersRepository.findById(userId)
                .map(Users::getListReproductions)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }


}

