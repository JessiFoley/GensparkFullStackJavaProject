package org.genspark.JavaFullStackBookstoreAPI.Service;

import org.genspark.JavaFullStackBookstoreAPI.Dao.UserDao;
import org.genspark.JavaFullStackBookstoreAPI.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserDao userDao;

    @Override
    public List<User> getUsers() {
        return this.userDao.findAll();
    }

    @Override
    public User getUserById(int userId) {
        User user = null;
        Optional<User> u = this.userDao.findById(userId);
        if(u.isPresent()){
            user = u.get();
        }else {
            throw new RuntimeException("No user with this ID");
        }
        return user;
    }

    @Override
    public User addUser(User user) {
        return this.userDao.save(user);
    }

    @Override
    public User updateUser(User user) {
        return this.userDao.save(user);
    }

    @Override
    public String deleteUser(int userId) {
        this.userDao.deleteById(userId);
        return "Deleted Successfully.";
    }
}
