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
}
