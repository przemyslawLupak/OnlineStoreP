package com.przemyslawlupak.onlinebookstore.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.przemyslawlupak.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
