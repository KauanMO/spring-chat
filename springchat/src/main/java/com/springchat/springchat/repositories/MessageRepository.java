package com.springchat.springchat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springchat.springchat.domains.message.Message;

public interface MessageRepository extends JpaRepository<Message, String> {
    
}
