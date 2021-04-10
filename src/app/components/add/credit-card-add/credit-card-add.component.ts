import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreditCardService } from 'src/app/services/creditCard/credit-card.service';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css']
})
export class CreditCardAddComponent implements OnInit {

  creditCardAddForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private creditCardService:CreditCardService,
    private toastrService:ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createCreditCardAddForm();
  }

  createCreditCardAddForm(){
    this.creditCardAddForm = this.formBuilder.group({
      nameOnTheCart:["",Validators.required],
      cardNumber:["",Validators.required],
      securityNumber:["",Validators.required],
      cardExpiryDate:["",Validators.required],
    })
 }

 add(){
  if(this.creditCardAddForm.valid){
    let creditCardModel = Object.assign({},this.creditCardAddForm.value)
    this.creditCardService.addCard(creditCardModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      this.router.navigate([""]);
      this.toastrService.success("Kiralama işlemi başarı ile gerçekleşti","Başarılı");
      this.toastrService.info("Anasayfaya Yönlendiriliyorsunuz");
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
