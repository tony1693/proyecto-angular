import { Component , EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from '../../pages/books/books.component';
import { CommonModule } from '@angular/common';
import { IdBookPipe } from '../../pipes/id-book.pipe';
import { Book } from '../../shared/models/book';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BooksComponent,CommonModule,IdBookPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
    @Input() public book: Book = new Book ()
    @Output() deleteCard = new EventEmitter<Book>();


      public onDeleteClick() {
          this.deleteCard.emit(this.book)
      } 
}   


