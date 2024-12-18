package com.example.moodmelody.entity;

import com.example.moodmelody.dto.DtoRegisterUser;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "users")
public class Users implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String nickName;
    private String lastName;
    private int age;
    private String email;
    private String password;
    @OneToMany(mappedBy = "users")
    private List<ListReproduction> listReproductions;

    public Users(DtoRegisterUser dtoRegisterUser) {
        this.name = dtoRegisterUser.name();
        this.nickName = dtoRegisterUser.nickname();
        this.lastName = dtoRegisterUser.lastname();
        this.age = dtoRegisterUser.age();
        this.email = dtoRegisterUser.email();
        this.password = dtoRegisterUser.password();
    }
}
