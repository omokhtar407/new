import { AuthService } from './../../../Core/Services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _AuthService:AuthService){}

  logForm:FormGroup = new FormGroup({
    email:new FormControl(null),
    password:new FormControl(null)
  })

  Login(){
    this._AuthService.login(this.logForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }
}
