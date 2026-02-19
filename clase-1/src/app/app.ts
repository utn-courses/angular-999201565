import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  nombre: string = "Gabriel"
}
