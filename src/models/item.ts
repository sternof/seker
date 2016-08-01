export class Item {
  public text:string;
  public done:boolean;
  public editMode:boolean;

  constructor(text: string) {
    this.text     = text;
    this.done     = false;
    this.editMode = false;
  }

}