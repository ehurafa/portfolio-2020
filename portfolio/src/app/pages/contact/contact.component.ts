import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  completeSend = false;
  initFeedback = false;
  onFeedback = false;

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  /*
  onSubmit(contactForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mlepjazv',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }
*/
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.contactForm.value);

    let self = this;

    if (this.contactForm.valid) {
      const email = this.contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/mlepjazv',
        { name: email.name, 
          email: email.email, subject: email.subject, message: email.message 
        },
        { 'headers': headers }).subscribe(
          response => {
            this.completeSend = true;
            console.log(response);

            setTimeout(function(){
              self.initFeedback = true;
            }, 1000);

            setTimeout(function(){
              self.onFeedback = true;
              self.completeSend = false;
            }, 2000);

            setTimeout(function(){
             
              self.onFeedback = false;
              self.initFeedback = false;
             
            }, 5000);
          }
        );
    }
  }


}
