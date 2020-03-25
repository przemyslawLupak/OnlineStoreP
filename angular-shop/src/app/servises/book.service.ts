import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../common/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:8080/api/v1/books?size=100";
  constructor(private httpClient: HttpClient) { }
getBooks():Observable<Book[]>{
  return this.httpClient.get<GetResponceBooks>(this.baseURL).pipe(
    map(responce=> responce._embedded.books)
  ); 
}
}
interface GetResponceBooks{
  _embedded:{
    books: Book[];
  }
}