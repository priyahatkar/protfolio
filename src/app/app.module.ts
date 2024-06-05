import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { ProjectComponent } from './shared/component/project/project.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { EducationComponent } from './shared/component/education/education.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SkillsComponent } from './shared/component/skills/skills.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProfileComponent } from './shared/component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    ContactComponent,
    DashboardComponent,
    FooterComponent,
    EducationComponent,
    SkillsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
