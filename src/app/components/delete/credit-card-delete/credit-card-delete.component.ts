import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CreditCardService } from 'src/app/services/creditCard/credit-card.service';

@Component({
  selector: 'app-credit-card-delete',
  templateUrl: './credit-card-delete.component.html',
  styleUrls: ['./credit-card-delete.component.css']
})
export class CreditCardDeleteComponent implements OnInit {

  creditCardDeleteForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private creditCardService:CreditCardService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCreditCardDeleteForm();
  }

  createCreditCardDeleteForm(){
    this.creditCardDeleteForm = this.formBuilder.group({
      creditCardId: ["",Validators.required],      
    })
 }

 delete(){
  if(this.creditCardDeleteForm.valid){
    let creditCardModel = Object.assign({},this.creditCardDeleteForm.value)
    this.creditCardService.deleteCard(creditCardModel).subscribe(response=>{
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
