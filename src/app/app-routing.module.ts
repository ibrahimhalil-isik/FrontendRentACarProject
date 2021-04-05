import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import {CarDetailComponent} from "./components/car-detail/car-detail.component";
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/add/car-add/car-add.component';
import { BrandAddComponent } from './components/add/brand-add/brand-add.component';
import { ColorAddComponent } from './components/add/color-add/color-add.component';
import { ColorDeleteComponent } from './components/delete/color-delete/color-delete.component';
import { CarDeleteComponent } from './components/delete/car-delete/car-delete.component';
import { BrandDeleteComponent } from './components/delete/brand-delete/brand-delete.component';
import { CarUpdateComponent } from './components/update/car-update/car-update.component';
import { BrandUpdateComponent } from './components/update/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/update/color-update/color-update.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},

  {path:"cars/carDetail/:carId", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarComponent},

  {path:"cars/rental", component:RentalComponent},
  {path:"payment", component:PaymentComponent},

  {path:"cars/add", component:CarAddComponent},
  {path:"brands/add", component:BrandAddComponent},
  {path:"colors/add", component:ColorAddComponent},

  {path:"cars/update", component:CarUpdateComponent},
  {path:"brands/update", component:BrandUpdateComponent},
  {path:"colors/update", component:ColorUpdateComponent},

  {path:"cars/delete", component:CarDeleteComponent},
  {path:"brands/delete", component:BrandDeleteComponent},
  {path:"colors/delete", component:ColorDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }