import { Component, OnInit } from '@angular/core';
import { Hardsoft } from 'src/app/model/hardsoft';
import { HardsoftService } from 'src/app/service/hardsoft.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  hardsoft: Hardsoft[] = [];
  
  
  constructor(
    private hardSoft: HardsoftService,
    private tokenService: TokenService
  ) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarHardSoft();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarHardSoft(){
    this.hardSoft.lista().subscribe(data => { this.hardsoft = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.hardSoft.delete(id).subscribe(
        data => {
          this.cargarHardSoft();
        }, err => {
          alert("No se puedo eleminar Skill");
        }
      )
    }
  }
}
