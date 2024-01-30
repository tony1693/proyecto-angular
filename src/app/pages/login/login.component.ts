import { Component } from '@angular/core';
import { FormLoginComponent } from '../../component/form-login/form-login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { loginUser } from '../../shared/models/login-user';
import { Color } from '../../shared/models/enums/color.enums';
import { ButtomComponent } from '../../component/buttom/buttom.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent,CommonModule,FormsModule,ButtomComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
