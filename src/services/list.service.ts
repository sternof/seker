
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Item} from '../model/item';

@Injectable()
export class ListService {

constructor (private http : Http){
}

public getQuestionsFromModel() : Observable<Item[]> {
var url = '../model/questions.json';
return this.getListFromModel(url);
}

public getPendingFromModel() : Observable<Item[]> {
var url = '../model/pending.json';
return this.getListFromModel(url);
}

private getListFromModel(url: string) : Observable<Item[]> {
return this.http.get(url).map(res  => res.json());
}

}
