package com.example.moodmelody.controller;

import com.example.moodmelody.entity.ListReproduction;
import com.example.moodmelody.service.UrlRequest;
import com.example.moodmelody.service.UrlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/urls")
public class UrlController {

    @Autowired
    private UrlService urlService;

    @PostMapping("/save")
    public ResponseEntity<String> saveUrl(@RequestBody UrlRequest urlRequest) {
        ListReproduction savedUrl = urlService.saveUrl(urlRequest.getUrl(), urlRequest.getUserId());

        return new ResponseEntity<>("URL guardada exitosamente con ID: " + savedUrl.getId(), HttpStatus.CREATED);
    }

    @GetMapping("/load/{userId}")
    public ResponseEntity<List<String>> getAllUrlsByUserId(@PathVariable Long userId) {
        List<ListReproduction> urls = urlService.findAllUrlsByUserId(userId);
        List<String> urlList = urls.stream()
                .map(ListReproduction::getUrl)
                .collect(Collectors.toList());
        return ResponseEntity.ok(urlList);
    }

}

