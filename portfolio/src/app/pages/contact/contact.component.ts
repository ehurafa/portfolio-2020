import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {

  progress = 0;
  total = 100;  
  completeSend = false;
  initFeedback = false;
  onFeedback = false;
  color: string;
  completeSteps: boolean = false;
  showBar = true;

  validateTable = [
     { "id": 0, "key": "name", "name": "", "color": "red", "typed": false, "progress": 20},
     { "id": 1, "key": "email", "email": "", "color": "orange", "typed": false, "progress": 40},
     { "id": 2, "key": "subject", "subject": "", "color": "green", "typed": false, "progress": 60},
     { "id": 3, "key": "message", "message": "", "color": "blue", "typed": false, "progress": 100}   
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

  setProps(el) {    
    let filtered = this.validateTable.filter(function(e) {
      return e.key == el; 
    });       
    
    this.setTyped(filtered[0].id, true);
    this.setColor(filtered[0].color);
    this.setProgress(filtered[0].progress);

  }
  setTyped(pos, typed) {    
    this.validateTable[pos].typed = typed;  
  }
  setColor(color) {  
    this.color = color;   
  }
  setProgress(progress) {  
    this.progress = progress;   
  }

  resetAnimation() {
    for (let index = 0; index < this.validateTable.length; index++) {
      this.setTyped(index, false);      
    }  

    this.setColor('red');
    this.setProgress(0);
  }

  step(el, valid) {   
    this.completeSteps = false;
    if(el == 'name' && valid == true) {
      if(this.validateTable[0].typed == false) {    
        this.setProps('name');
      }
    }  
    else if(el == 'email' && valid == true) {
      if(this.validateTable[1].typed == false) {
        this.setProps('email');
      }
    } 
    else if(el == 'subject' && valid == true) {
      if(this.validateTable[2].typed == false) {
        this.setProps('subject');
      } 
    } 
    else if(el == 'message' && valid == true) {
      if(this.validateTable[3].typed == false) {
        this.setProps('message');       
      }
      this.completeSteps = true;     
    } 
  }

  initBar() {
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
  }

  ngOnInit(): void {

    this.initBar();     
    this.setColor('red'); 

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
            self.showBar = false;         

            setTimeout(function(){
              self.initFeedback = true;
              self.resetAnimation();
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
              self.showBar = true;     
             
            }, 4000);
          }
        );
    }
  }

}
