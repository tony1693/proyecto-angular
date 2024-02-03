import { Component } from '@angular/core';
import { Color } from '../../shared/models/enums/color.enums';
import { loginUser } from '../../shared/models/login-user';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  public buttonText: string = 'Submit';
  public buttonColor: string = 'bg-primary';

  public reactiveForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  public handleSubmit(): void {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm)
  }

   
}
