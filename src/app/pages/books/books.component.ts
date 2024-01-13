import { Component } from '@angular/core';
import { Book } from '../../models/user';
import { CommonModule } from '@angular/common';
import { IdBookPipe } from '../../pipes/id-book.pipe';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,IdBookPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
    public books:Book []= [
      {
        id_book:1,
        id_user:5,
        title:'Don Quijote de la Mancha',
        type:'Tapa dura',
        author:'Miguel de Cervantes',
        price:12.99,
        photo:'https://images-na.ssl-images-amazon.com/images/I/71fRMTejbyL.jpg'
      },
      {
        id_book:2,
        id_user:10,
        title:'Cinco semanas en globo',
        type:'Tapa dura',
        author:'Julio Verne',
        price:19.99,
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cinq_Semaines_en_ballon_001.png/800px-Cinq_Semaines_en_ballon_001.png'
      },
      {
        id_book:3,
        id_user:15,
        title:'Bodas de sangre',
        type:'Tapa dura',
        author:'Federico Garcia Lorca',
        price:29.99,
        photo:'https://static.cegal.es/imagenes/marcadas/9788437/978843760560.gif'
      },
    ]
    public valuesInput(inputTitle: HTMLInputElement, inputType: HTMLInputElement, inputAuthor: HTMLInputElement, inputPrice: HTMLInputElement, inputPhoto: HTMLInputElement, inputCode: HTMLInputElement) {
      const newBook: Book = {
        id_book: parseFloat(inputCode.value),
        id_user: 5,
        title: inputTitle.value,
        type: inputType.value,
        author: inputAuthor.value,
        price: parseFloat(inputPrice.value),
        photo: inputPhoto.value
      };

      this.books.push(newBook);
      
      inputTitle.value = '';
      inputType.value = '';
      inputAuthor.value = '';
      inputPrice.value = '';
      inputPhoto.value = '';
      inputCode.value = '';
    }
    
}
