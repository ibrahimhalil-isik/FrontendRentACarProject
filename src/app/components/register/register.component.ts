import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/register/registerModel';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  user:User;
  
  constructor(
    private formBuilder:FormBuilder,
     private authService:AuthService, 
     private toastrService:ToastrService,
     private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  register() {
    if(this.registerForm.valid){
      let registerModel:RegisterModel = Object.assign({},this.registerForm.value);
      this.authService.register(registerModel).subscribe(response=>{
        console.log(response);
        localStorage.setItem("token",response.data.token);
        this.getUserByEmail(registerModel.email);
        this.toastrService.info(response.message)
        this.router.navigate(['/login'])
      }, responseError=>{
        console.error(responseError)
        this.toastrService.error(responseError.error);
      });
    }
    else{
      this.toastrService.warning('ERROR');
    }
  }

  getUserByEmail(email: string) {
    this.userService.getByEmail(email).subscribe(response => {
       this.user = response.data;
    });
 }

  // register(){
  //   if(this.registerForm.valid){
  //     console.log(this.registerForm.value);
  //     let registerModel = Object.assign({},this.registerForm.value)

  //     this.authService.register(registerModel).subscribe(response=>{
  //       this.toastrService.info(response.message),
  //       this.toastrService.success("Giriş Başarılı")
  //       localStorage.setItem("token",response.data.token)
  //     },responseError=>{
  //       this.toastrService.error(responseError.error)
  //     })
  //   }
  // }

}
