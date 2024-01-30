package com.springchat.springchat.repositories;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.springchat.springchat.domains.message.Message;
import com.springchat.springchat.domains.message.MessageProjection;

public interface MessageRepository extends JpaRepository<Message, String> {
    @Query(value = "SELECT m.messageid as messageid, m.message as message, m.date as date, u as user FROM Message m JOIN m.user u ORDER BY m.date DESC")
    List<MessageProjection> findLastMessagesWithProjection(Pageable pageable);
}
