package org.genspark.JavaFullStackBookstoreAPI.Entity;

import javax.persistence.*;

@Entity
@Table(name="tbl_books")
public class Book {
    @Id
    @Column(name="b_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int bookId;
    @Column(name="b_title")
    private String bookTitle;
    @Column(name="b_genre")
    private String bookGenre;
    @Column(name="b_binding")
    private String bookBinding;
    @Column(name="b_price")
    private int bookPrice;

    public Book() {
    }

    public Book(String bookTitle, String bookGenre, String bookBinding, int bookPrice) {
        this.bookTitle = bookTitle;
        this.bookGenre = bookGenre;
        this.bookBinding = bookBinding;
        this.bookPrice = bookPrice;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public String getBookGenre() {
        return bookGenre;
    }

    public void setBookGenre(String bookGenre) {
        this.bookGenre = bookGenre;
    }

    public String getBookBinding() {
        return bookBinding;
    }

    public void setBookBinding(String bookBinding) {
        this.bookBinding = bookBinding;
    }

    public int getBookPrice() {
        return bookPrice;
    }

    public void setBookPrice(int bookPrice) {
        this.bookPrice = bookPrice;
    }

    @Override
    public String toString() {
        return "Book{" +
                "bookId=" + bookId +
                ", bookTitle='" + bookTitle + '\'' +
                ", bookGenre='" + bookGenre + '\'' +
                ", bookBinding='" + bookBinding + '\'' +
                ", bookPrice=" + bookPrice +
                '}';
    }
}
