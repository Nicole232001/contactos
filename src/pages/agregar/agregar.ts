import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
contactos=[];
nombre='';
telefono='';
correo='';
facebook='';
twitter='';
instagram='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.contactos=this.navParams.get("contactos");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }
  clickanadir(){
    if(this.nombre.length>0 && this.telefono.length>0){
      this.contactos.push({nombre:this.nombre,telefono:this.telefono,correo:this.correo,facebook:this.facebook,twitter:this.twitter,instagram:this.instagram,imagen:"../assets/imag2.png"});
      this.navCtrl.pop();
      
    }
    else{
      console.log("falta algo")
      const alert=this.alertCtrl.create({
        title:"Oops!", subTitle:"nombre y telefono tienen que estar llenos", buttons: ["OK"]
      })
      alert.present();
    }
  }
  }
