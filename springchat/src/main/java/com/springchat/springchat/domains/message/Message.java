package com.springchat.springchat.domains.message;

import java.time.LocalDateTime;
import java.util.Date;

import com.springchat.springchat.domains.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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

    @Column(name = "date", columnDefinition = "datetime default current_timestamp")
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name="userid")
    private User user;

    public Message(MessageDTO messageDTO) {
        this.message = messageDTO.message();
        this.user = messageDTO.user();
    }
}
