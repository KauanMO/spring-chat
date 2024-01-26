package com.springchat.springchat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springchat.springchat.domains.returnMessage.ReturnMessageDTO;
import com.springchat.springchat.domains.user.User;
import com.springchat.springchat.domains.user.UserDTO;
import com.springchat.springchat.repositories.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping(consumes = "application/json")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ReturnMessageDTO> login(@RequestBody UserDTO user) {
        User userFound = repository.findByUsernameAndPassword(user.username(), user.password());
        return userFound != null
                ? ResponseEntity.ok(new ReturnMessageDTO(userFound.getUserid(), "Login realizado", 200))
                : ResponseEntity.ok(new ReturnMessageDTO("Usuário não encontrado", 404));
    }

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<String> register(@RequestBody UserDTO user) {
        User newUser = new User(user);
        repository.save(newUser);

        return ResponseEntity.ok(newUser.getUserid());
    }
}
