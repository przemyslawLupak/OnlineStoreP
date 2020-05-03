import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';
import { BookCategory } from '../common/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private categoryUrl ="http://localhost:8080/api/v1/book-category?size=4";
  private baseURL = "http://localhost:8080/api/v1/books";
  constructor(private httpClient: HttpClient) { }


  getBooks(theCategoryId:number):Observable<Book[]>{
  const searchUrl = `${this.baseURL}/search/categoryid?id=${theCategoryId}`;
  return this.httpClient.get<GetResponceBooks>(searchUrl).pipe(
    map(responce=> responce._embedded.books)
  ); 
  }
  getAllBooks():Observable<Book[]>{
    const booksUrl = `${this.baseURL}?size=40`
    return this.httpClient.get<GetResponceBooks>(booksUrl).pipe(
      map(responce=> responce._embedded.books)
    )
  }
  getBooksByKeyword(keyword:any):Observable<Book[]>{
    const keywordUrl=`${this.baseURL}/search/searchbykeyword?name=${keyword}`
    return this.httpClient.get<GetResponceBooks>(keywordUrl).pipe(
      map(responce =>responce._embedded.books, console.log())
    )
  }
  getBookCategories():Observable<BookCategory[]>{
    return this.httpClient.get<GetResponceBookCategory>(this.categoryUrl).pipe(
      map(responce=> responce._embedded.bookCategory)
    );  
    }
}

interface GetResponceBookCategory{
  _embedded:{
    bookCategory: BookCategory[];
  } 
}
  interface GetResponceBooks{
    _embedded:{
      books: Book[];
    }
  }
    
     