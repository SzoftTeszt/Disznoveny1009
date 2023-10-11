import { Component } from '@angular/core';
import { BaseService } from 'src/app/Services/base.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { Noveny } from 'src/app/Model/noveny';
import { KosarService } from 'src/app/Services/kosar.service';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})

export class NovenyekComponent {
  novenyek:any
  szo:string=""
  tetelek:any=[]
  constructor(private base:BaseService,
    private router:Router, 
    private kosar:KosarService){
    this.base.getPlants().snapshotChanges().pipe(
      map( (changes)=> changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ) )
    ).subscribe({
      next:(adatok)=>this.novenyek=adatok,
      error:(hiba)=>console.log(hiba)
    })
    this.tetelek=this.kosar.getTetelek()
  }
  
  torol(body:any){
    this.base.deletePlant(body)
  }

  modosit(body:any){
    this.router.navigate(['/ujnoveny', body])
  }
  rendelTetel(noveny:any, db:string){
    // console.log(db)
    this.kosar.addTetel(noveny.key,db)
    this.tetelek=this.kosar.getTetelek()
  }

  megrendeltE(key:string){
    return  this.tetelek.find(
      (rekord:any)=>rekord.novenyKey==key
    )
  }
}
