package com.springchat.springchat.domains.message;

import com.springchat.springchat.domains.user.User;

public record MessageDTO(String message, User user) {
}