package com.springchat.springchat.domains.onOff;

import com.springchat.springchat.domains.user.User;

public record OnOffDTO(Boolean isOn, User user) {
}
