import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  contacto = {
    nombre:"",
    apellidos:""
  }

  private miForm: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder:FormBuilder) {
    this.miForm = formBuilder.group(
      {
        nombre: ["", Validators.required],
        apellidos: ["", Validators.required]
      }
    )
  }

  enviarForm(miformulario){
    console.log(this.contacto);
    console.log(miformulario.value);
  }

  enviarForm2(){
    console.log(this.miForm.value);
  }
}
