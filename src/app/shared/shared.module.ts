import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  exports: [
    SidebarComponent,
    TopbarComponent,
    SearchComponent
  ]
})
export class SharedModule { }
