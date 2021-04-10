import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CreditCardService } from 'src/app/services/creditCard/credit-card.service';

@Component({
  selector: 'app-credit-card-update',
  templateUrl: './credit-card-update.component.html',
  styleUrls: ['./credit-card-update.component.css']
})
export class CreditCardUpdateComponent implements OnInit {

  creditCardUpdateForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private creditCardService:CreditCardService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCreditCardUpdateForm();
  }

  createCreditCardUpdateForm(){
    this.creditCardUpdateForm = this.formBuilder.group({
      creditCardId: ["",Validators.required],
      nameOnTheCart:["",Validators.required],
      cardNumber:["",Validators.required],
      securityNumber:["",Validators.required],
      cardExpiryDate:["",Validators.required],
    })
 }

 update(){
  if(this.creditCardUpdateForm.valid){
    let creditCardModel = Object.assign({},this.creditCardUpdateForm.value)
    this.creditCardService.updateCard(creditCardModel).subscribe(response=>{
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
