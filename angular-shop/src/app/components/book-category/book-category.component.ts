import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/servises/book.service';
import { BookCategory } from 'src/app/common/book-category';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  constructor(private _bookService : BookService) { }
  categoryList:BookCategory[];
  ngOnInit(): void {
    this.listCategory();
 }

  listCategory(){
    this._bookService.getBookCategories().subscribe(
      data=>{
        this.categoryList =data;
      }
    )
  }
}
