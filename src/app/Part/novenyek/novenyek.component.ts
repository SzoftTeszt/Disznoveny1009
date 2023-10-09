import { Component } from '@angular/core';
import { BaseService } from 'src/app/Services/base.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  novenyek:any
  szo:string=""
  constructor(private base:BaseService,
    private router:Router){
    this.base.getPlants().snapshotChanges().pipe(
      map( (changes)=> changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ) )
    ).subscribe({
      next:(adatok)=>this.novenyek=adatok,
      error:(hiba)=>console.log(hiba)
    })
  }
  
  torol(body:any){
    this.base.deletePlant(body)
  }

  modosit(body:any){
    this.router.navigate(['/ujnoveny', body])
  }
}
