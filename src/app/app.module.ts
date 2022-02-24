import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalServiceService } from './services/modal/modal-service.service';
import { EmployeesDataServiceService } from './services/employees-data/employees-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents:[],
  providers: [
    ModalServiceService,
    EmployeesDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
