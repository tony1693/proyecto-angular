import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IdBookPipe } from '../../pipes/id-book.pipe';
import { FormComponent } from '../../component/form/form.component';
import { CommonModule } from '@angular/common';
import { Book } from '../../shared/models/book';
import { CardComponent } from '../../component/card/card.component';
import { ButtomComponent } from '../../component/buttom/buttom.component';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { Color } from '../../shared/models/enums/color.enums';


@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [IdBookPipe,CardComponent,ButtomComponent,CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  @Output() saveBooksData = new EventEmitter<Book>();
  public buttonTextParent = 'Search';
  public buttonColor = Color.green;
  
  constructor(private readonly booksService:BooksService, private readonly router:Router){}
  public books:Book []= [];

    ngOnInit() {
    }

    public valuesInput(inputTitle: HTMLInputElement, inputType: HTMLInputElement, inputAuthor: HTMLInputElement, inputPrice: HTMLInputElement, inputPhoto: HTMLInputElement, inputCode: HTMLInputElement) {
      const newBook: Book = {
        id_book: parseFloat(inputCode.value),
        id_user: 5,
        title: inputTitle.value,
        type: inputType.value,
        author: inputAuthor.value,
        price: parseFloat(inputPrice.value),
        photo: inputPhoto.value,
      };
      this.booksService.add(newBook);
      this.booksService.addApi(newBook).subscribe((data) => {
        
      })
      this.router.navigateByUrl('/books')
      
      inputTitle.value = '';
      inputType.value = '';
      inputAuthor.value = '';
      inputPrice.value = '';
      inputPhoto.value = '';
      inputCode.value = '';
  }
    }

     
