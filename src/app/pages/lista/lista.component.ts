import { Component, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/interfaces/interface';
import { FarmaciaSerService } from 'src/app/services/farmacia-ser.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{

  farmacia!:Farmacia[];

  constructor(private farmaService: FarmaciaSerService){ }


  ngOnInit(): void {
    this.farmaService.getFarmacia().subscribe(Farmacia => {
      this.farmacia = Farmacia
    })
  }


  onClickDelete(farmacia:Farmacia){

  }

}
