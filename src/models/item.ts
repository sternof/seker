export class Item {

  public title:string;
  public done:boolean;
  public editing:boolean;

  constructor(title:string) {
    this.title   = title;
    this.done    = false;
    this.editing = false;
  }

}