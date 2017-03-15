import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {NotificationsService } from 'angular2-notifications/src/notifications.service'
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   public myForm: FormGroup;
  title = 'Toast Notifications';
  private pendingMessage: string;
  constructor( private _service: NotificationsService,private _fb: FormBuilder) {
  this.pendingMessage = "initial stuff";
  }
  public options = {
    timeOut: 5000,
    lastOnBottom: true
  };
  ngOnInit() {

     }
  name: string = "success";
  names: string[] = ["success","error"]
  titles: string=" ";
  // titleData:string="just a title";
  messageData:string="just content";
  Onlick(name,title,message){
    console.log(name,title,message)
    switch(name){
      case 'success':
      this._service.success(title, message)
      break;
      case 'error':
      this._service.error(title, message)
      break;
    }
  }
}
