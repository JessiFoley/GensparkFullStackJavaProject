package org.genspark.JavaFullStackBookstoreAPI.Entity;

import javax.persistence.*;

@Entity
@Table(name="tbl_users")
public class User {
    @Id
    @Column(name="u_id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int userId;
    @Column(name="u_name")
    private String username;
    @Column(name="u_pwd")
    private String password;

    public User(){

    }
    public User(int userId, String username, String password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
