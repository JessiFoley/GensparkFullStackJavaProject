package org.genspark.JavaFullStackBookstoreAPI.Service;

import org.genspark.JavaFullStackBookstoreAPI.Dao.BookDao;
import org.genspark.JavaFullStackBookstoreAPI.Entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService{

    @Autowired
    BookDao bookDao;

    @Override
    public List<Book> getBooks() {
        return this.bookDao.findAll();
    }

    @Override
    public Book getBookById(int bookId) {
        Book book = null;
        Optional<Book> b = this.bookDao.findById(bookId);
        if(b.isPresent()){
            book = b.get();
        }else {
            throw new RuntimeException("No Book with this ID: ");
        }
        return book;
    }

    @Override
    public Book addBook(Book book) {
        return this.bookDao.save(book);
    }

    @Override
    public Book updateBook(Book book) {
        return this.bookDao.save(book);
    }

    @Override
    public String deleteBook(int bookId) {
        this.bookDao.deleteById(bookId);
        return "Deleted Successfully!";
    }
}
