package com.springchat.springchat.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springchat.springchat.domains.message.Message;
import com.springchat.springchat.domains.message.MessageDTO;
import com.springchat.springchat.domains.message.MessageProjection;
import com.springchat.springchat.domains.returnMessage.ReturnMessageDTO;
import com.springchat.springchat.repositories.MessageRepository;
import com.springchat.springchat.services.MessageService;

@RestController
@RequestMapping("/message")
public class MessageController {
    @Autowired
    private MessageRepository repository;

    @Autowired
    private MessageService service;

    @PostMapping(consumes = "application/json")
    @CrossOrigin
    @SendTo("/topic/messages")
    @MessageMapping("/sendMessage")
    public ResponseEntity<ReturnMessageDTO> registerMessage(@RequestBody MessageDTO message) {
        Message mensagem = new Message(message);
        if (mensagem.getDate() == null) mensagem.setDate(LocalDateTime.now());

        repository.save(mensagem);

        return ResponseEntity.ok(new ReturnMessageDTO<Message>("Mensagem enviada", 200, mensagem));
    }

    @GetMapping
    @CrossOrigin
    public ResponseEntity<List<Message>> findLastMessages() {
        List<MessageProjection> messageProjections = repository.findLastMessagesWithProjection(PageRequest.of(0,20));
        List<Message> messages = service.convertProjectionsToMessages(messageProjections);

        return ResponseEntity.ok(messages);
    }
}
