export class RecipeModule{
  public name : string;
  public description : string;
  //public imgpath : string;
  constructor(name : string , desc : string){
    this.name = name;
    this.description = desc;
  //  this.imgpath = path;
  }
}
