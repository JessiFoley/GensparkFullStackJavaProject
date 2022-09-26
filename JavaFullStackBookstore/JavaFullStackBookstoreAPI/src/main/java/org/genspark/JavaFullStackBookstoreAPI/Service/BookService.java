package org.genspark.JavaFullStackBookstoreAPI.Service;

import org.genspark.JavaFullStackBookstoreAPI.Entity.Book;

import java.util.List;

public interface BookService {
    List<Book> getBooks();
    Book getBookById(int bookId);
    Book addBook(Book book);
    Book updateBook(Book book);
    String deleteBook(int bookId);
}
