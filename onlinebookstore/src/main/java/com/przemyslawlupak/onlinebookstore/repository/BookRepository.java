package com.przemyslawlupak.onlinebookstore.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.przemyslawlupak.onlinebookstore.entity.Book;
@CrossOrigin("http://localhost:4200")//allow angular request to acess spring data
public interface BookRepository extends JpaRepository<Book, Long> {

}
