package com.springchat.springchat.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springchat.springchat.domains.user.User;

public interface UserRepository extends JpaRepository<User, String> { 
    User findByUsernameAndPassword(String username, String Password);
}