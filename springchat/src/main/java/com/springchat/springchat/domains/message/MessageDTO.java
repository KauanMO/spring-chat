package com.springchat.springchat.domains.message;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {
    private String clientMessage;
    private String serverMessage;

    public MessageDTO(String message) {
        this.clientMessage = message;
    }
}
