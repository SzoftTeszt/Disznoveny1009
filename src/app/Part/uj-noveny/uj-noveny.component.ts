import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noveny } from 'src/app/Model/noveny';
import { BaseService } from 'src/app/Services/base.service';

@Component({
  selector: 'app-uj-noveny',
  templateUrl: './uj-noveny.component.html',
  styleUrls: ['./uj-noveny.component.css']
})
export class UjNovenyComponent {
  noveny:Noveny={}
  
  constructor(private base:BaseService, private route:ActivatedRoute, private router:Router){
    this.route.paramMap.subscribe(
      (parameterek:any)=>this.noveny=JSON.parse(JSON.stringify(parameterek.params))
    )
  }

  ujNoveny(){
    this.base.newPlant(this.noveny)
    this.router.navigate(['/novenyek'])
  }
}
