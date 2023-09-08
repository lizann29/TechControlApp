import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'; // Import HttpClientModule

import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { DataTableComponent } from './data-table/data-table.component';
import 'bootstrap/dist/js/bootstrap.js';
// import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataTableComponent,
    FilterPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
