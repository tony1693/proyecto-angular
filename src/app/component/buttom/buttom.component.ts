import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-buttom',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.css'
})
export class ButtomComponent {
  @Input() public buttonText: string = 'Save';
  @Input() public buttonColor: string = 'bg-primary';
}
