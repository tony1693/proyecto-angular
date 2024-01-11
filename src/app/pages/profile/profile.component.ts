import { Component } from '@angular/core';
import {User} from '../../models/user';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public user: User = {
    id_user:1,
    name:'Juan Antonio',
    last_name:'Antolin Ruiz',
    email:'toak_16@hotmail.com',
    photo:'https://i.pinimg.com/550x/a5/b1/04/a5b104c1518099faf1da94b4decefa5f.jpg',
    password:''
  }
  public changeDate (inputName:HTMLInputElement,inputSurName:HTMLInputElement,inputEmail:HTMLInputElement,inputUrl:HTMLInputElement) {
    console.log(inputName.value);
    this.user.name = inputName.value;  
    this.user.last_name = inputSurName.value;  
    this.user.email = inputEmail.value;
    this.user.photo = inputUrl.value;
  }
}

