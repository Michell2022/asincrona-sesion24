import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmaciaSerService } from 'src/app/services/farmacia-ser.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegister!: FormGroup;

  // INYECTO MI SERVICIO Y RUTAS.
  constructor(private farmaciaService:FarmaciaSerService, private router:Router) {
    // MEDIANTE MI VARIABLE formRegister OBTENGO LOS VALORES DE MI FORMULARIO.
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl()
    })
  }


  ngOnInit(): void {

  }


  onSubmit() {
    //VERIFICAMOS POR CONSOLE SI OBTENEMOS LOS DATOS INGRESADOS EN AGREGAR PRODUCTO.
    //console.log(this.formRegister.value);

    // ENVIO LOS VALORES producto - costo - foto DE MI FORMULARIO A MI SERVICIO.
    const response = this.farmaciaService.addProduct(this.formRegister.value)
    
    console.log(response)
    //AL INGRESAR UN NUEVO PRODUCTO NOS REDIRECCIONA A LISTA.
    this.router.navigate(['/lista'])
  }
}
