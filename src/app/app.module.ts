import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {SimpleNotificationsModule} from 'angular2-notifications';
import { AppComponent } from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NotificationsService } from 'angular2-notifications/src/notifications.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,SimpleNotificationsModule,
    ReactiveFormsModule
  ],
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})


export class AppModule { }
