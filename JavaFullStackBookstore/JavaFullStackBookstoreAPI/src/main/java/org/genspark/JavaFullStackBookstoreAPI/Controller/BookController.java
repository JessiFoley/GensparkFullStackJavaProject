package org.genspark.JavaFullStackBookstoreAPI.Controller;

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
    public List<Book> getBook() { return this.bookService.getAllBooks(); }

    @GetMapping("/books/{bookId}")
    public Book getBook(@PathVariable String bookId) { return this.bookService.getBookById(Integer.parseInt(bookId)); }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) { return this.bookService.addBook(book); }

    @PutMapping("/books")
    public Book updateBook(@RequestBody Book book) { return this.bookService.updateBook(book); }

    @DeleteMapping("/books/{bookId}")
    public String deleteBook(@PathVariable String bookId) {
        this.bookService.deleteBookById(Integer.parseInt(bookId));
        return "Book successfully deleted";
    }
}
