import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../shared/models/register-user';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  public buttonText: string = 'Submit';
  public buttonColor: string = 'bg-primary';

  public reactiveForm: FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required]),
    lastName:new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    url:new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  public handleSubmit(): void {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm)
  }
}
