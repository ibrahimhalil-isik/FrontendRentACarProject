import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  userUpdateForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private userService:UserService,
    private toastrService:ToastrService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.createUserUpdateForm();
  }

  createUserUpdateForm(){
    this.userUpdateForm = this.formBuilder.group({
      userId:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],      
      password:["",Validators.required],
    })
 }

 update(){
  if(this.userUpdateForm.valid){
    let userModel = Object.assign({},this.userUpdateForm.value)
    this.userService.update(userModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      this.router.navigate([""]);
      this.toastrService.success("Kullanıcı Bilgileri Başarı ile Güncellendi");
      this.toastrService.info("AnaSayfaya Yönlendiriliyorsunuz");
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }       
      } 
    })
    
  }else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
  
}
}
