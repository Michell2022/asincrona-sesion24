import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Farmacia } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaSerService {

  constructor( private firestore:Firestore) { }

  //AGREGAR PRODUCTO.
  // EN MI addProduct RECIBE producto DE TIPO Farmacia QUE VIENE DE interfaces QUE TIENE LOS CAMPOS.
  addProduct(producto:Farmacia){
    const farmaciaRef = collection(this.firestore, 'farmacia');
    return addDoc(farmaciaRef, producto);
  }


  //OBTENER LOS PRODUCTOS.

  getFarmacia():Observable<Farmacia[]>{
    //EN farmaciaRef TRAERE TODA LA COLECCION DE MI BASE DE DATOS + farmacia.
    const farmaciaRef = collection(this.firestore, 'farmacia');
    //TRAIGO LA collectionData DE LA referenciaRef Y LAS ORDENO POR EL CAMPO id POR MEDIO DE UN ARREGLO.
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<Farmacia[]>
  }

  //ELIMINAR EL doc DE ESTA BASE DE DATOS CON EL id.
  deleteFarmacia(farmacia:Farmacia){
    const farmaciaRef = doc(this.firestore, `farmacia/${farmacia.id}`)
    return deleteDoc(farmaciaRef);
  }
}
