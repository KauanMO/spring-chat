package com.springchat.springchat.domains.message;

import java.sql.Date;

import com.springchat.springchat.domains.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Message")
@Entity(name = "Message")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "messageid")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String messageid;
    
    private String message;

    private Date date;

    @ManyToOne
    private User user;

    public Message(MessageDTO messageDTO) {
        this.message = messageDTO.message();
        this.user = messageDTO.user();
    }
}
