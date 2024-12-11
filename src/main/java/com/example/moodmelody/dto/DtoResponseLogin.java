package com.example.moodmelody.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DtoResponseLogin {
    private Long id;
    private String name;
    private String nickName;
    private String email;
    public DtoResponseLogin(Long id, String name, String nickName, String email) {
    }
}
