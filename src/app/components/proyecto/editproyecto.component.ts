import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private sproyecto: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sproyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al updatear Proyecto");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sproyecto.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al updatear Proyecto.");
        this.router.navigate(['']);
      }
    )
  }
}
