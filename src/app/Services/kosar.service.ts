import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class KosarService {

  constructor() { }
  tetelek:any=[]

  getTetelek(){
    return this.tetelek
  }

  addTetel(key:string, db:string){
    let body:any={}
    body.novenyKey=key
    body.db=Number(db)

    let i=this.tetelek.findIndex(
      (rekord:any)=>rekord.novenyKey==key
    )
    console.log(i)
    if (i!=-1) {
      if (body.db==0) this.tetelek.splice(i,1)
      else this.tetelek[i].db=body.db
    
    }
    else {
      if (body.db!=0) this.tetelek.push(body)
    }
   
    console.log("Rendelések",this.tetelek)
  }
}
