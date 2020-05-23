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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
