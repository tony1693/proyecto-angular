import { Component, EventEmitter, Output } from '@angular/core';
import { ButtomComponent } from '../buttom/buttom.component';
import { Book } from '../../shared/models/book';
import { Color } from '../../shared/models/enums/color.enums';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ButtomComponent,],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    public buttonTextParent = 'Save';
    public buttonColor = Color.green;
    @Output() saveBooksData = new EventEmitter<Book>();
    
  
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
      
        
      this.saveBooksData.emit(newBook);
     
      
      

      inputTitle.value = '';
      inputType.value = '';
      inputAuthor.value = '';
      inputPrice.value = '';
      inputPhoto.value = '';
      inputCode.value = '';
  }
}

