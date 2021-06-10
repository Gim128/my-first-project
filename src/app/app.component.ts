import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loignForm = new FormGroup({
    email: new FormControl(
      '',[Validators.email,
      Validators.required
      ]
    ),
    password: new FormControl(
      '',[Validators.required,Validators.minLength(6),
      Validators.maxLength(10)]
    )
  });


  // email='';
  // password='';
  //
  // setUserName(text:string){
  //   this.userName=text;
  //   console.log(this.userName);
  // }

  login(){
    // console.log(this.email);
    // console.log(this.password);
    console.log(this.loignForm.get('email'));
    console.log(this.loignForm.get('password'));


  }


}
