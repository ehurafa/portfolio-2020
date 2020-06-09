import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {

  testeeee = false;

  validateTable = [
     { "name": '', "valid": false, "typed": false},
     { "email": '', "valid": false, "typed": false},
     { "subject": '', "valid": false, "typed": false},
     { "message": '', "valid": false, "typed": false}   
  ];

  contactForm = new FormGroup({

      'name': new FormControl(this.validateTable[0]['name'], [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.validateTable[1]['email'], [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ]),
      'subject': new FormControl(this.validateTable[2]['subject'], [
        Validators.required,
        Validators.minLength(4)
      ]),
      'message': new FormControl(this.validateTable[3]['message'], [
        Validators.required,
        Validators.minLength(4)
      ])

  });

  completeSend = false;
  initFeedback = false;
  onFeedback = false;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.contactForm.value);

    let self = this;

    if (this.contactForm.valid) {
      const email = this.contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mlepjazv',
        { name: email.name, 
          //email: email.email, subject: email.subject, 
          message: email.message 
        },
        { 'headers': headers }).subscribe(
          response => {
            this.completeSend = true;
            console.log(response);

            setTimeout(function(){
              self.initFeedback = true;
            }, 200);

            setTimeout(function(){
              self.onFeedback = true;
              self.completeSend = false;
            
            }, 2000);

            setTimeout(function(){
             
              self.onFeedback = false;
              self.initFeedback = false;
             
            }, 4000);
          }
        );
    }
  }


}
