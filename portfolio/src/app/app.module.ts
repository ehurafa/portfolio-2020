import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { ReactiveFormsModule } from '@angular/forms';


import { JobComponent } from './job/job.component';
import { PreloaderComponent } from './templates/preloader/preloader.component';
import { ContactComponent } from './pages/contact/contact.component';

import { NgpSortModule } from "ngp-sort-pipe";

/*
import { AboutComponent } from './pages/about/about.component';
import { TemplatesComponent } from './templates/templates.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AdaptiveBackgroundDirective } from './directives/adaptive-background.directive';

*/

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    CardComponent,
    JobComponent,
     ContactComponent,
    //AboutComponent,
   
   //TemplatesComponent,
   // FooterComponent,
    //AdaptiveBackgroundDirective,
    PreloaderComponent    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    //HttpClientTestingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
	NgpSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
