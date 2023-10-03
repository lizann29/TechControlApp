import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  {path: 'home', component: NavBarComponent},
  {path: 'data', component: DataTableComponent },

  { path: '', redirectTo: 'data', pathMatch: 'full' }, // Redirect empty path to 'data'

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }