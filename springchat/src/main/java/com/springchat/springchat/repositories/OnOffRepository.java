package com.springchat.springchat.repositories;

import com.springchat.springchat.domains.onOff.OnOff;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OnOffRepository extends JpaRepository<OnOff, String> {

}
