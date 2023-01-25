import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmacia } from 'src/app/interfaces/interface';
import { FarmaciaSerService } from 'src/app/services/farmacia-ser.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  farmacia!:Farmacia[];

  //INYECTO MI SERVICIOS Y ROUTER.
  constructor(private farmaService: FarmaciaSerService, private router:Router){ }


  ngOnInit(): void {
    this.farmaService.getFarmacia().subscribe(Farmacia => {
      this.farmacia = Farmacia
    })
  }

// CREO MI FUNCION ELIMINAR PRODUCTO.
  onClickDelete(farmacia:Farmacia){
    const response = this.farmaService.deleteFarmacia(farmacia)
    console.log(response);
  }

  // CREO MI FUNCION REGISTRAR PRODUCTO NUEVO.
  onClickNuevo(){
    this.router.navigate(['/registro'])
  }
}
