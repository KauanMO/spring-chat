package com.springchat.springchat.domains.returnMessage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReturnMessageDTO<T> {
    private String clientMessage;
    private String serverMessage;
    private Integer status;
    private T data;

    public ReturnMessageDTO(String message, Integer status) {
        this.clientMessage = message;
        this.status = status;
    }

    public ReturnMessageDTO(String message, Integer status, T data) {
        this.clientMessage = message;
        this.status = status;
        this.data = data;
    }

    public ReturnMessageDTO(Integer status, T data) {
        this.status = status;
        this.data = data;
    }
}
