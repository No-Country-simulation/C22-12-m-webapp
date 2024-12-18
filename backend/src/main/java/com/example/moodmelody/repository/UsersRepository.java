package com.example.moodmelody.repository;

import com.example.moodmelody.entity.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users getById(Long id);

    Users getUsersByEmail(String email);
}
