import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultOption = "pet";
  answere = '';
  genders = ['male','female'];
  @ViewChild('myForm', {static:true})myForm:NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.myForm.setValue({
      userData:{
        username:suggestedName,
        email:''
      },
      secret:this.defaultOption,
      secretAnswere:'',
      gender:this.genders[0]
    })
  }

  onSubmit(){
    console.log(this.myForm);
  }
}
