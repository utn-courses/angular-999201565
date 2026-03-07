import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms"
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form implements OnInit {
  form: FormGroup
  usuarios: any[] = []

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(data)
        this.usuarios = data
      },
      error: () => console.log("Error al traer los usuarios")
    })
  }

  enviar() {
    if (this.form.valid) {
      // utilizar el servicio para realizar una petición http (addUser(user))
      this.userService.addUser(this.form.value).subscribe({
        next: () => {
          this.usuarios.push(this.form.value)
          this.form.reset()
        }
      })
    }
  }
}
