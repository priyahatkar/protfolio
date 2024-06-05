import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { ProjectComponent } from './shared/component/project/project.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { EducationComponent } from './shared/component/education/education.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
