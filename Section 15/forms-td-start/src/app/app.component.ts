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
    this.myForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  onSubmit(){
    console.log(this.myForm);
  }
}
