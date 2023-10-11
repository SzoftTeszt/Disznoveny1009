import { Component } from '@angular/core';
import { KosarService } from 'src/app/Services/kosar.service';

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {
  tetelek:any=[]
  
  
  megrendeles:any={}

  constructor(private kosar:KosarService){
    this.tetelek=this.kosar.getTetelek()
  }
}
