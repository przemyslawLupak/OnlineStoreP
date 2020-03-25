import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './servises/book.service';
import { RouterModule, Routes } from '@angular/router';
import { PaeNotFoundComponent } from './components/pae-not-found/pae-not-found.component';

const routes: Routes=[
  {path:'books',component: BookListComponent},
  {path:'category/:id', component:BookListComponent},
  {path:'',redirectTo:'books',pathMatch:'full'},
  {path:'**',component:PaeNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PaeNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
