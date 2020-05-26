import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './templates/sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { JobComponent } from './job/job.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TemplatesComponent } from './templates/templates.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AdaptiveBackgroundDirective } from './directives/adaptive-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    CardComponent,
    JobComponent,
    AboutComponent,
    ContactComponent,
    TemplatesComponent,
    FooterComponent,
    AdaptiveBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
