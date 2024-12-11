package com.example.moodmelody.repository;

import com.example.moodmelody.entity.ListReproduction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UrlRepository extends JpaRepository<ListReproduction, Long> {

}
