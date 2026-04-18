import { AuthService } from './../../../Core/Services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router:Router) {}

  regForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    phone: new FormControl(null),
  });



  Register(){
    this._AuthService.register(this.regForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.message =='success'){
          this._Router.navigate(['/login'])
        }

      }
    })
  }
}
