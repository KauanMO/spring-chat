package com.springchat.springchat.domains.user;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "User")
@Entity(name = "User")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "userid")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userid;

    private String username;

    private String password;

    public User(UserDTO registerDTO) {
        this.username = registerDTO.username();
        this.password = registerDTO.password();
    }

    public record UserToClient(String username, String userid) {}
}
