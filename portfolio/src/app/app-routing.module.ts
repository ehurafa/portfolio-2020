import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ContainerComponent } from './container/container.component';
import { JobComponent } from './job/job.component';
import { AppComponent } from './app.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  // {
  //   path: "",
  //   component: ContainerComponent
  // },
  { component: ContainerComponent, path: "", data: {animation: 'HomePage' }},
  { component: JobComponent, path: "job/:id", data: {animation: 'JobPage' }},
  // {
  //   path: "about",
  //   component: AboutComponent
  // },
  // {
  //   path: "about/:id",
  //   component: AboutComponent
  // },
  { component: ContactComponent, path: "contact", data: {animation: 'ContactPage' }},
  { component: ContainerComponent, path: "**", data: {animation: 'HomePage'  }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
