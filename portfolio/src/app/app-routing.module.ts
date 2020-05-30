import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ContainerComponent } from './container/container.component';
import { JobComponent } from './job/job.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: ContainerComponent
  },
  {
    path: "job/:id",
    component: JobComponent
  },
  // {
  //   path: "about",
  //   component: AboutComponent
  // },
  // {
  //   path: "about/:id",
  //   component: AboutComponent
  // },
   {
    path: "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
