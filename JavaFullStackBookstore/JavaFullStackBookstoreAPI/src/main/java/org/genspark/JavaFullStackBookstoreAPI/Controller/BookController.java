package org.genspark.JavaFullStackBookstoreAPI.Controller;

import org.genspark.JavaFullStackBookstoreAPI.Entity.Book;
import org.genspark.JavaFullStackBookstoreAPI.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/")
    public String home() { return "<HTML><H1>Welcome to the Books API</H1></HTML>"; }

    @GetMapping("/books")
    public List<Book> getBook() { return this.bookService.getBooks(); }

    @GetMapping("/books/{bookId}")
    public Book getBook(@PathVariable String bookId) { return this.bookService.getBookById(Integer.parseInt(bookId)); }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) { return this.bookService.addBook(book); }

    @PutMapping("/books")
    public Book updateBook(@RequestBody Book book) { return this.bookService.updateBook(book); }

    @DeleteMapping("/books/{bookId}")
    public String deleteBook(@PathVariable String bookId) {
        return this.bookService.deleteBook(Integer.parseInt(bookId));
    }
}
