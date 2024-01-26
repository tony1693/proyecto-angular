import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../../shared/models/book';
import { IdBookPipe } from '../../pipes/id-book.pipe';
import { CardComponent } from '../../component/card/card.component';
import { ButtomComponent } from '../../component/buttom/buttom.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../component/form/form.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [IdBookPipe,CardComponent,ButtomComponent,CommonModule,FormComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  @Output() valuesCard = new EventEmitter<Book>();
    public books:Book []= [];

    ngOnInit() {
      this.books = [ 
      {
        id_book:1,
        id_user:5,
        title:'Don Quijote de la Mancha',
        type:'Tapa dura',
        author:'Miguel de Cervantes',
        price:12.99,
        photo:'https://images-na.ssl-images-amazon.com/images/I/71fRMTejbyL.jpg',
        
      },
      {
        id_book:2,
        id_user:10,
        title:'Cinco semanas en globo',
        type:'Tapa dura',
        author:'Julio Verne',
        price:19.99,
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cinq_Semaines_en_ballon_001.png/800px-Cinq_Semaines_en_ballon_001.png',
      },
      {
        id_book:3,
        id_user:15,
        title:'Bodas de sangre',
        type:'Tapa dura',
        author:'Federico Garcia Lorca',
        price:29.99,
        photo:'https://static.cegal.es/imagenes/marcadas/9788437/978843760560.gif',
      },
];
    }
     
    public getBooksData(newBook:Book) {
      this.books.push(newBook) ;
      console.log(newBook);
      
    }

    onDeleteCard(bookToDelete: Book) {
      const index = this.books.findIndex(book => book.id_book === bookToDelete.id_book);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
}
