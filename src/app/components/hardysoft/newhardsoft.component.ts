import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardsoft } from 'src/app/model/hardsoft';
import { HardsoftService } from 'src/app/service/hardsoft.service';

@Component({
  selector: 'app-newhardsoft',
  templateUrl: './newhardsoft.component.html',
  styleUrls: ['./newhardsoft.component.css']
})
export class NewhardsoftComponent implements OnInit {
  nombreHS:string = '';
  porcentajeHS:number= 0;
  
  constructor(private sHardSoft: HardsoftService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Hardsoft(this.nombreHS, Number(this.porcentajeHS) );
    this.sHardSoft.save(expe).subscribe(
      data => {
        alert("Skill Agregado");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al cargar Skill");
        this.router.navigate(['']);
      }
    )
  }

}
