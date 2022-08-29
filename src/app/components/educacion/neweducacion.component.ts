import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  tituloE:string;
  lugarE:string;
  anioIE:string;
  anioEE:string;
  descripcionE:string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {

  }
  onCreate():void{
    const educacion = new Educacion(
      this.tituloE, 
      this.lugarE,
      this.anioIE,
      this.anioEE,
      this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educacion cargada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo la carga educacion");
        this.router.navigate(['']);
      }
    )
  }

}


