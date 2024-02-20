package com.springchat.springchat.services;

import com.springchat.springchat.domains.user.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    public List<User.UserToClient> generateUsersToClientList(List<User> usersFount) {
        List<User.UserToClient> users = new ArrayList<>();

        for (User user : usersFount) {
            users.add(new User.UserToClient(user.getUsername(), user.getUserid()));
        }

        return users;
    }
}
