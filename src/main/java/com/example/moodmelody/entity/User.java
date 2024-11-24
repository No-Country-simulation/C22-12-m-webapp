package com.example.moodmelody.entity;

import com.example.moodmelody.dto.DtoRegisterUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "user")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String nickName;
    private String lastName;
    private int age;
    private String email;
    private String password;
    @OneToMany
    private List<ListReproduction> listReproductions;

    public User (DtoRegisterUser dtoRegisterUser) {
        this.name = dtoRegisterUser.name();
        this.nickName = dtoRegisterUser.nickname();
        this.lastName = dtoRegisterUser.lastname();
        this.age = dtoRegisterUser.age();
        this.email = dtoRegisterUser.email();
        this.password = dtoRegisterUser.password();
    }
}
