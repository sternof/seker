
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Item} from '../model/item';
import {ListActions} from '../actions/list.actions';


@Injectable()
export class ListService {

constructor (private http : Http, private listactions : ListActions) {
  this.loadList();
}

public getQuestionsFromModel() : Observable<Item[]> {
var url = '../../assets/model/questions.json';
return this.getListFromModel(url);
}

public getPendingFromModel() : Observable<Item[]> {
var url = '../../assets/model/pending.json';
return this.getListFromModel(url);
}

public clearList() {
  this.listactions.clearall();
}

private getListFromModel(url: string) : Observable<Item[]> {
return this.http.get(url).map(res  => res.json());
}

private loadList() {
  this.getQuestionsFromModel().subscribe( list => {
    for (let i=0; i< list.length;i++){
      list[i].percent = 0;
      this.listactions.add(list[i]);
    }
  });
 }
}
