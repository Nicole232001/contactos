import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
nombre='';
imagen='';
correo='';
telefono='';
facebook='';
twitter='';
instagram='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('nombre'));
    this.nombre=this.navParams.get('nombre');
    console.log(this.navParams.get('imagen'));
    this.imagen=this.navParams.get('imagen');
    console.log(this.navParams.get('telefono'));
    this.telefono=this.navParams.get('telefono');
    console.log(this.navParams.get('correo'));
    this.correo=this.navParams.get('correo');
    console.log(this.navParams.get('facebook'));
    this.facebook=this.navParams.get('facebook');
    console.log(this.navParams.get('twitter'));
    this.twitter=this.navParams.get('twitter');
    console.log(this.navParams.get('instagram'));
    this.instagram=this.navParams.get('instagram');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarPage');
  }

}
