
//import {Http, Response} from '@angular/http';

export class ListService {
/*
http : Http;
constructor (http : Http){
 this.http = http;
}
*/
// any should be list of questions.
public getListFromModel() : any {
var list = [
    {title: 'from hardcoded service project', percent: 0 },
    {title: 'Come to meetup', percent: 0 },
  ];

//this.http.get('../model/itemlist.json').map((res: Response) => res.json()).subscribe(res => list = res);                    

return list;
} 


}
