package org.genspark.JavaFullStackBookstoreAPI.Dao;

import org.genspark.JavaFullStackBookstoreAPI.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
}
