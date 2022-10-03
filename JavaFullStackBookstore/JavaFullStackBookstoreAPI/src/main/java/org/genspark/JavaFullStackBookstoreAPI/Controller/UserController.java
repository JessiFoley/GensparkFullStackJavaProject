package org.genspark.JavaFullStackBookstoreAPI.Controller;

import org.genspark.JavaFullStackBookstoreAPI.Entity.User;
import org.genspark.JavaFullStackBookstoreAPI.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/users")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }

    @GetMapping("/users/{userId}")
    public User getUserById(@PathVariable String userId){
        return this.userService.getUserById(Integer.parseInt(userId));
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return this.userService.addUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user){
        return this.userService.updateUser(user);
    }

    @DeleteMapping("/users/{userId}")
    public String deleteUser(@PathVariable String userId){
        return this.userService.deleteUser(Integer.parseInt(userId));
    }
}
