import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  linkImgP: string = '';
  linkExtP: string = '';

  constructor(
    private sproyecto: ProyectoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombreP,this.descripcionP,this.linkImgP,this.linkExtP);
    this.sproyecto.save(expe).subscribe(
      data => {
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al cargar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
