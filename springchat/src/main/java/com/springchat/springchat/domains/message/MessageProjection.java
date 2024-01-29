package com.springchat.springchat.domains.message;

import java.time.LocalDateTime;

import com.springchat.springchat.domains.user.User;

public interface MessageProjection {
    String getMessageid();
    String getMessage();
    LocalDateTime getDate();
    User getUser();
}
