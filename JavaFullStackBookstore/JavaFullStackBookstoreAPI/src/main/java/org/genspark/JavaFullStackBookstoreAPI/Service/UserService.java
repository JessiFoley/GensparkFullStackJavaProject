package org.genspark.JavaFullStackBookstoreAPI.Service;

import org.genspark.JavaFullStackBookstoreAPI.Entity.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User getUserById(int userId);
    User addUser(User user);
    User updateUser(User user);
    String deleteUser(int userId);
}
