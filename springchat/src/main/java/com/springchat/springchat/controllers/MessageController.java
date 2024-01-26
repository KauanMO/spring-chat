package com.springchat.springchat.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springchat.springchat.domains.message.Message;
import com.springchat.springchat.domains.message.MessageDTO;
import com.springchat.springchat.domains.returnMessage.ReturnMessageDTO;
import com.springchat.springchat.repositories.MessageRepository;

@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired
    private MessageRepository repository;

    @PostMapping(consumes = "application/json")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ReturnMessageDTO> registerMessage(@RequestBody MessageDTO message) {
        Message mensagem = new Message(message);
        repository.save(mensagem);

        return ResponseEntity.ok(new ReturnMessageDTO("Mensagem enviada", 200));
    }
}
