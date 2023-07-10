import { Component } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  todasNoticias: Noticia[] = [
    {
      id: 1,
      titulo:"Cães tratados como filhos",
      noticia:'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog',
      categorias: ['Comportamento'],
      dataCriacao: '09/07/2023'
    }
  ]



}



