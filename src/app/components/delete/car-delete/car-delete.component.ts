import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  carDeleteForm : FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private carService:CarService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createCarDeleteeForm();
  }

  createCarDeleteeForm(){
    this.carDeleteForm = this.formBuilder.group({
      carId: ['',Validators.required],
    })
 }

 delete(){
  if(this.carDeleteForm.valid){
    let carModel = Object.assign({},this.carDeleteForm.value)
    this.carService.delete(carModel).subscribe(response=>{
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
