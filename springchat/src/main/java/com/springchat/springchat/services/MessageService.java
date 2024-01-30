package com.springchat.springchat.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springchat.springchat.domains.message.Message;
import com.springchat.springchat.domains.message.MessageProjection;
import com.springchat.springchat.domains.user.User;

@Service
public class MessageService {
    public List<Message> convertProjectionsToMessages(List<MessageProjection> projections) {
        List<Message> messages = new ArrayList<>();

        for (MessageProjection projection : projections) {
            Message message = new Message();

            message.setMessageid(projection.getMessageid());
            message.setMessage(projection.getMessage());

            message.setDate(projection.getDate());

            message.setUser(new User());

            message.getUser().setUserid(projection.getUser().getUserid());
            message.getUser().setUsername(projection.getUser().getUsername());

            messages.add(message);
        }

        return messages;
    }
}
