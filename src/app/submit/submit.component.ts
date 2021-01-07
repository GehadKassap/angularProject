import { Component, OnInit } from '@angular/core';
import{FormControl , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {


  submitForm:FormGroup = new FormGroup({
     email: new FormControl(null ,[ Validators.required , Validators.email]),
     password: new FormControl(null , [Validators.required , Validators.minLength(4) , Validators.maxLength(9)]),
     adress: new FormControl(null , Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }
  getFormData(formData)
  {
      console.log(formData);
  }

}
