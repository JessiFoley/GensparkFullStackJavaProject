package org.genspark.JavaFullStackBookstoreAPI.Dao;

import org.genspark.JavaFullStackBookstoreAPI.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDao extends JpaRepository<Book, Integer> {
}