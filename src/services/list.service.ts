
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ListService {

constructor (private http : Http) { //, private response: Response){
}


// any should be list of questions.
public getListFromModel() : any {
var url = '../model/itemlist.json';
var list = [
    {title: 'from hardcoded service project', percent: 0 },
    {title: 'Come to meetup', percent: 0 },
  ];
//this.http.get(url).map((res: Response) => res.json()).subscribe(res => list = res);                    

 //this.http.get(url)
  //                  .map(this.extractData)
                    //.(this.handleError);
 return list;  
}
/* 
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  */

}
