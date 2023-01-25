import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [

  { path:'home', component:HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path:'login', component:LoginComponent },
  { path:'registrousuario', component:RegistroUsuarioComponent },
  { path:'registro', component:RegistroComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path:'lista', component:ListaComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path:'', redirectTo:'login', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
