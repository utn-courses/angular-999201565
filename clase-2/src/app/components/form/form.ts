import { Component } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form {
  form: FormGroup
  usuarios: any[] = []

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      edad: ["",[Validators.required, Validators.min(18)]]
    })
  }

  enviar(){
    console.log(this.form.valid)
    if(this.form.valid) {
      this.usuarios.push(this.form.value)
      this.form.reset()
    }
  }
}
