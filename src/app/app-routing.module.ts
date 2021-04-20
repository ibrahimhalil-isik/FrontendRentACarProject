import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import {CarDetailComponent} from "./components/car-detail/car-detail.component";
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { RentalComponent } from './components/rental/rental.component';
<<<<<<< HEAD
import { CarAddComponent } from './components/add/car-add/car-add.component';
import { BrandAddComponent } from './components/add/brand-add/brand-add.component';
import { ColorAddComponent } from './components/add/color-add/color-add.component';
import { ColorDeleteComponent } from './components/delete/color-delete/color-delete.component';
import { CarDeleteComponent } from './components/delete/car-delete/car-delete.component';
import { BrandDeleteComponent } from './components/delete/brand-delete/brand-delete.component';
import { CarUpdateComponent } from './components/update/car-update/car-update.component';
import { BrandUpdateComponent } from './components/update/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/update/color-update/color-update.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { RentalAddComponent } from './components/add/rental-add/rental-add.component';
import { OperationsComponent } from './components/operations/operations.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardAddComponent } from './components/add/credit-card-add/credit-card-add.component';
import { CreditCardUpdateComponent } from './components/update/credit-card-update/credit-card-update.component';
import { CreditCardDeleteComponent } from './components/delete/credit-card-delete/credit-card-delete.component';
import { UserUpdateComponent } from './components/update/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';
=======
>>>>>>> 96a8a55145b72b80fdaa0b491aa3fc6ed8410cd4

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"user/:userId", component:UserComponent, canActivate:[LoginGuard]},

  {path:"cars/carDetail/:carId", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId", component:CarComponent},

  {path:"cars/rental", component:RentalComponent},
<<<<<<< HEAD
  {path:"creditcard", component:CreditCardComponent, canActivate:[LoginGuard]},

  {path:"cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path:"brands/add", component:BrandAddComponent, canActivate:[LoginGuard]},
  {path:"colors/add", component:ColorAddComponent, canActivate:[LoginGuard]},
  {path:"rentals/add", component:RentalAddComponent, canActivate:[LoginGuard]},
  {path:"creditcards/add", component:CreditCardAddComponent, canActivate:[LoginGuard]},

  {path:"cars/update", component:CarUpdateComponent, canActivate:[LoginGuard]},
  {path:"brands/update", component:BrandUpdateComponent, canActivate:[LoginGuard]},
  {path:"colors/update", component:ColorUpdateComponent, canActivate:[LoginGuard]},
  {path:"creditcards/update", component:CreditCardUpdateComponent, canActivate:[LoginGuard]},
  {path:"users/update", component:UserUpdateComponent},


  {path:"cars/delete", component:CarDeleteComponent, canActivate:[LoginGuard]},
  {path:"brands/delete", component:BrandDeleteComponent, canActivate:[LoginGuard]},
  {path:"colors/delete", component:ColorDeleteComponent, canActivate:[LoginGuard]},
  {path:"creditcards/delete", component:CreditCardDeleteComponent, canActivate:[LoginGuard]},
  
 
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"operations", component:OperationsComponent, canActivate:[LoginGuard]},
=======
>>>>>>> 96a8a55145b72b80fdaa0b491aa3fc6ed8410cd4
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }