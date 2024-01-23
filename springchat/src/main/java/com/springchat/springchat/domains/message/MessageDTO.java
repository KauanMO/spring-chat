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
    private Integer status;

    public MessageDTO(String message, Integer status) {
        this.clientMessage = message;
        this.status = status;
    }
}
