import { PersonalData, ContactRequest } from './../../models/contact-request';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  countries = ['USA', 'Germany', 'Italy', 'France'];

  requestTypes = ['Claim', 'Feedback', 'Help Request'];

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.createFormGroup(formBuilder);
  }

  ngOnInit() {
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      personalData: formBuilder.group(new PersonalData()),
      requestType: '',
      text: ''
    })
  }

  onSubmit() {
    let result: ContactRequest = this.contactForm.value;
  }

  reset() {
    // Resets to blank object
    this.contactForm.reset();

    // Rests to provided model
    this.contactForm.reset({PersonalData: new PersonalData(), requestType: '', text: ''})
  }

}
