import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './model/employee.service';
import { TruncatePipe } from './exponential-strength.pipe';
import { RightComponent } from './right/right.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    TruncatePipe,
    FilterPipe,
    SortPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
