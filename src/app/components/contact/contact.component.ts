

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const headers = new HttpHeaders({ 'Accept': 'application/json' });

      this.http.post('https://formspree.io/f/mjkwdvqj', formData, { headers }).subscribe({
        next: () => {
          this.successMessage = 'Message sent successfully!';
          this.errorMessage = '';
          alert('Message sent successfully!')
          this.contactForm.reset();
        },
        error: () => {
          this.errorMessage = 'There was an error sending the message.';
          this.successMessage = '';
          alert('There was an error sending the message.')
        }
      });
    }
  }
}
