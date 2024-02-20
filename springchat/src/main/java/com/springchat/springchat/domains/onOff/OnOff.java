package com.springchat.springchat.domains.onOff;

import com.springchat.springchat.domains.user.User;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table(name = "Onoff")
@Entity(name = "Onoff")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "onoffid")
public class OnOff {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String onoffid;

    @Column(name = "ison")
    private Boolean isOn;

    @Column(name = "date", columnDefinition = "datetime default current_timestamp")
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "userid")
    private User user;

    public OnOff(OnOffDTO dto) {
        this.isOn = dto.isOn();
        this.user = dto.user();
    }
}