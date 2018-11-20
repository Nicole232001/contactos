import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';
import { MostrarPage } from '../mostrar/mostrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
agregar=AgregarPage;
mostar=MostrarPage;

contacto=
[
  {nombre: "Ariel Martínez", telefono:"3319587423", correo: "a_mart56@gmail.com", facebook: "Ariel Martínez", twitter: "A_martínez", instagram: "A_martínez", imagen:"../assets/imag2.png"}
];
  constructor(public navCtrl: NavController) {

  }
  clickmostrar(contact){
    this.navCtrl.push(this.mostar, contact);
  }
  clickagregar(){
    this.navCtrl.push(this.agregar, {contactos:this.contacto});
  }
}
