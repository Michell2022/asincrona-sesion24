import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit{

  formRegistroUser!:FormGroup;

  constructor(private usuarioService:UserServiceService, private router:Router){

    this.formRegistroUser = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.usuarioService.registerUser(this.formRegistroUser.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error))
  }


  iniciarSesion(){
    this.router.navigate(['/login']);
  }
}
