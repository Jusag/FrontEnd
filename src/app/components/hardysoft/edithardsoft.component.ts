import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardsoft } from 'src/app/model/hardsoft';
import { HardsoftService } from 'src/app/service/hardsoft.service';

@Component({
  selector: 'app-edithardsoft',
  templateUrl: './edithardsoft.component.html',
  styleUrls: ['./edithardsoft.component.css']
})
export class EdithardsoftComponent implements OnInit {
  hardSoft:Hardsoft= null;
  
  constructor(private sHardSoft: HardsoftService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardSoft.detail(id).subscribe(
      data => {
        this.hardSoft = data;
      }, err => {
        alert("Error al updatear experiencia");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardSoft.update(id, this.hardSoft).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al updatear Experiencia.");
        this.router.navigate(['']);
      }
      )
  }
}
