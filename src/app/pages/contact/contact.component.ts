import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };

  submit() {
    alert(`Thank you ${this.form.name}! We will contact you at ${this.form.email} soon.`);
    this.form = { name: '', email: '', message: '' };
  }
}
