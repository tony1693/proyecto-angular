import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtomComponent } from '../../component/buttom/buttom.component';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { Book } from '../../shared/models/book';
import { Color } from '../../shared/models/enums/color.enums';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [ButtomComponent],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  @Output() saveBooksData = new EventEmitter<Book>();
  public buttonTextParent = 'Modify';
  public buttonColor = Color.red;
  constructor(private readonly booksService: BooksService,private readonly router:Router) {}
  public books:Book []= [];
  ngOnInit(){

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
    this.booksService.edit(newBook);
    this.router.navigateByUrl('/books')
  
  inputTitle.value = '';
  inputType.value = '';
  inputAuthor.value = '';
  inputPrice.value = '';
  inputPhoto.value = '';
  inputCode.value = '';
}
}
