
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Item} from '../model/item';

@Injectable()
export class ListService {

constructor (private http : Http){
}

public getListFromModel() : Observable<Item[]> {
var url = '../model/itemlist.json';
return this.http.get(url).map(res  => res.json());
}
}
