import { Component, OnInit, OnChanges, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit, OnChanges {

  progress = 0;
  total = 100;
  steps = 0;
  completeSend = false;
  initFeedback = false;
  onFeedback = false;
  color: string;
  completeSteps: boolean = false;

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

  

  constructor(private http: HttpClient) { }

  colors(): void {
    this.completeSteps = false;
   if(this.progress < 40) {
     this.color = 'red';
   } else if(this.progress < 60) {
     this.color = 'orange';   
   
   } else if(this.progress < 90) {
     this.color = 'green';
   }
   else {
   this.color = 'blue';
    this.completeSteps = true;
   }
 }

  step(el, valid) {
    this.completeSteps = false;
  
    if(el == 'name' && valid == true) {
     
      this.progress = 20;
      this.color = 'red';
    }  if(el == 'email' && valid == true) {
     
      this.progress = 40;
      this.color = 'orange';   
    } if(el == 'subject' && valid == true) {
      this.progress = 60;
      this.color = 'green';
    } 
     if(el == 'message' && valid == true) {
      this.progress = 100;
      this.color = 'blue';
      this.completeSteps = true;
    } 
  
  }

  ngOnInit(): void {

    if(!this.progress) {
      this.progress = 0;
    }

    if(this.total === 0) {
      this.total = this.progress;
    } else if(!this.total) {
      this.total = 100;
    }

    if(this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }
    this.progress = (this.progress / this.total) * 100;
     
    this.colors()
 

  }
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
     
  onSubmit(formData: any, formDirective: FormGroupDirective ): void {    

    // TODO: Use EventEmitter with form value
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

            setTimeout(function(){
              self.initFeedback = true;
            }, 200);

            setTimeout(function(){
              self.onFeedback = true;
              self.completeSend = false;

              formDirective.resetForm();
              self.contactForm.reset();          
            
            }, 2000);

            setTimeout(function(){
             
              self.onFeedback = false;
              self.initFeedback = false;
             
            }, 4000);
          }
        );
    }
  }

  ngOnChanges () { 
    this.colors();
  }

}
