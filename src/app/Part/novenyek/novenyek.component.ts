import { Component } from '@angular/core';
import { BaseService } from 'src/app/Services/base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  novenyek:any
  constructor(private base:BaseService){
    this.base.getPlants().snapshotChanges().pipe(
      map( (changes)=> changes.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      ) )
    ).subscribe({
      next:(adatok)=>this.novenyek=adatok,
      error:(hiba)=>console.log(hiba)
    })
  }
}
