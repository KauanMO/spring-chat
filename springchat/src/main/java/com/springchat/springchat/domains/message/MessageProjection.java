package com.springchat.springchat.domains.message;

import java.sql.Date;

import com.springchat.springchat.domains.user.User;

public interface MessageProjection {
    String getMessageid();
    String getMessage();
    Date getDate();
    User getUser();
}
