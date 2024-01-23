package com.springchat.springchat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springchat.springchat.domains.message.MessageDTO;
import com.springchat.springchat.domains.user.User;
import com.springchat.springchat.domains.user.UserLoginDTO;
import com.springchat.springchat.domains.user.UserRegisterDTO;
import com.springchat.springchat.repositories.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping
    public ResponseEntity<MessageDTO> login(@RequestBody UserLoginDTO user) {
        MessageDTO mensagem = repository.findByUsernameAndPassword(user.username(), user.password()) != null
                ? new MessageDTO("Login realizado")
                : new MessageDTO("Usuário não encontrado");

        return ResponseEntity.ok(mensagem);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserRegisterDTO user) {
        User newUser = new User(user);
        repository.save(newUser);

        return ResponseEntity.ok().build();
    }
}
