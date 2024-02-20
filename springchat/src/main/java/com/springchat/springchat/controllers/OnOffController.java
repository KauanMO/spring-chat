package com.springchat.springchat.controllers;

import com.springchat.springchat.domains.message.Message;
import com.springchat.springchat.domains.onOff.OnOff;
import com.springchat.springchat.domains.onOff.OnOffDTO;
import com.springchat.springchat.domains.returnMessage.ReturnMessageDTO;
import com.springchat.springchat.repositories.OnOffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("Onoff")
public class OnOffController {
    @Autowired
    private OnOffRepository repo;

    @CrossOrigin
    @PostMapping
    public ResponseEntity<ReturnMessageDTO> registerOnOff(@RequestBody OnOffDTO onOff) {
        OnOff newOnOff = new OnOff(onOff);
        if (newOnOff.getDate() == null) newOnOff.setDate(LocalDateTime.now());

        repo.save(newOnOff);

        return ResponseEntity.ok(new ReturnMessageDTO<Message>("Login cadastrado", 200));
    }
}
