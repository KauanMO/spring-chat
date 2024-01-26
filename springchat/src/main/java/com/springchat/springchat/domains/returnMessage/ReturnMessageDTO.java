package com.springchat.springchat.domains.returnMessage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReturnMessageDTO {
    private String clientMessage;
    private String serverMessage;
    private Integer status;

    public ReturnMessageDTO(String message, Integer status) {
        this.clientMessage = message;
        this.status = status;
    }
}
