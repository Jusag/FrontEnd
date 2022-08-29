import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-expereciencia',
  templateUrl: './new-expereciencia.component.html',
  styleUrls: ['./new-expereciencia.component.css']
})
export class NewExperecienciaComponent implements OnInit {
  nombreE: string = '';
  anioIE: string = '';;
  anioEE: string = '';;
  cargoE: string = '';;
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.anioIE, this.anioEE, this.cargoE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia suamada");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al cargar Experiencia");
        this.router.navigate(['']);
      }
    )
  }
}

