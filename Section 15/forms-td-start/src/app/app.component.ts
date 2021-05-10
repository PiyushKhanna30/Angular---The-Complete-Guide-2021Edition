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
  user={
    username:'',
    email:'',
    secret:'',
    answere:'',
    gender:''
  }
  submitted = false;
  @ViewChild('myForm', {static:true})myForm:NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.myForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secret = this.myForm.value.secret;
    this.user.answere = this.myForm.value.secretAnswere;
    this.user.gender = this.myForm.value.gender;
    console.log(this.myForm);
    this.myForm.reset();
  }
}
