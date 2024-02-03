import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../../shared/models/book';
import { IdBookPipe } from '../../pipes/id-book.pipe';
import { CardComponent } from '../../component/card/card.component';
import { ButtomComponent } from '../../component/buttom/buttom.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../component/form/form.component';
import { BooksService } from '../../services/books.service';
import { Color } from '../../shared/models/enums/color.enums';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [IdBookPipe,CardComponent,ButtomComponent,CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  @Output() valuesCard = new EventEmitter<Book>();
    public buttonTextParent = 'Search';
    public buttonColor = Color.red;
    public singleBook!:Book | undefined;
    public noBookText:string = "";
    public books:Book []= [];
    constructor(private readonly booksService: BooksService) {}

    ngOnInit() {
      this.books = this.booksService.getAll();
      
    }
 
    onDeleteCard(bookToDelete: Book) {
      const index = this.books.findIndex(book => book.id_book === bookToDelete.id_book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }    
    }

    public findBook(inputCode:HTMLInputElement) {
      const book = this.booksService.getOne(Number(inputCode.value));
      console.log(inputCode);
      
        if(book) {
          this.singleBook = book;
          this.noBookText = '';
        } else {
            this.singleBook = undefined;
            this.noBookText = 'I couldn`t find any book with this id'
               
          }
    }
}
