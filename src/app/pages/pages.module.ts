import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ListaComponent,
    RegistroComponent
  ]
})
export class PagesModule { }
