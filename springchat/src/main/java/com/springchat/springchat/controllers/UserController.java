package com.springchat.springchat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.springchat.springchat.domains.returnMessage.ReturnMessageDTO;
import com.springchat.springchat.domains.user.User;
import com.springchat.springchat.domains.user.UserDTO;
import com.springchat.springchat.repositories.UserRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping(consumes = "application/json")
    @CrossOrigin
    public ResponseEntity<ReturnMessageDTO> login(@RequestBody UserDTO user) {
        User userFound = repository.findByUsernameAndPassword(user.username(), user.password());
        return userFound != null
                ? ResponseEntity.ok(new ReturnMessageDTO<String>("Login realizado", 200, userFound.getUserid()))
                : ResponseEntity.ok(new ReturnMessageDTO<>("Usuário não encontrado", 404));
    }

    @PostMapping("/register")
    @CrossOrigin
    public ResponseEntity<String> register(@RequestBody UserDTO user) {
        User newUser = new User(user);
        repository.save(newUser);

        return ResponseEntity.ok(newUser.getUserid());
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<ReturnMessageDTO> getUsers() {
        List<User.UserToClient> users = new ArrayList<>();

        List<User> usersFount = repository.findAll();

        for (User user : usersFount) {
            users.add(new User.UserToClient(user.getUsername(), user.getUserid()));
        }

        return ResponseEntity.ok(new ReturnMessageDTO<List<User.UserToClient>>(200, users));
    }
}
