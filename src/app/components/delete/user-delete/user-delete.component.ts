import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  userDeleteForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private userService:UserService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createUserDeleteForm();
  }

  createUserDeleteForm(){
    this.userDeleteForm = this.formBuilder.group({
      userId: ["",Validators.required],
    })
 }

 delete(){
  if(this.userDeleteForm.valid){
    let userModel = Object.assign({},this.userDeleteForm.value)
    this.userService.delete(userModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
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
