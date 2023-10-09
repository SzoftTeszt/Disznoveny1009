import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Noveny } from '../Model/noveny';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  refNovenyek: AngularFireList<Noveny>

  constructor(private db:AngularFireDatabase) { 
    this.refNovenyek=this.db.list('/novenyek')
  }
  getPlants(){
    return this.refNovenyek
  }

  newPlant(body:any){
    // console.log("key", body.key)
    // console.log("bkey", Boolean(body.key))

    if (body.key) return this.refNovenyek.update(body.key,body)
    return this.refNovenyek.push(body)
  }

  deletePlant(body:any){
    return this.refNovenyek.remove(body.key)
  }

  updatePlant(body:any){
    return this.refNovenyek.update(body.key,body)
  }
}
