import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule}from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';

import {ToastrModule} from "ngx-toastr";
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/add/car-add/car-add.component';
import { BrandAddComponent } from './components/add/brand-add/brand-add.component';
import { ColorAddComponent } from './components/add/color-add/color-add.component';
import { CarDeleteComponent } from './components/delete/car-delete/car-delete.component';
import { ColorDeleteComponent } from './components/delete/color-delete/color-delete.component';
import { BrandDeleteComponent } from './components/delete/brand-delete/brand-delete.component';
import { CarUpdateComponent } from './components/update/car-update/car-update.component';
import { BrandUpdateComponent } from './components/update/brand-update/brand-update.component';
import { ColorUpdateComponent } from './components/update/color-update/color-update.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarImageAddComponent } from './components/add/car-image-add/car-image-add/car-image-add.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarFilterPipePipe,
    CarDetailComponent,
    CarFilterComponent,
    PaymentComponent,
    CarAddComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarDeleteComponent,
    ColorDeleteComponent,
    BrandDeleteComponent,
    CarUpdateComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    LoginComponent,
    CarImageAddComponent,
    RegisterComponent,
  ],
  
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],

  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
