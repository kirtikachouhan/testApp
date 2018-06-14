import { Injectable } from "@angular/core";


@Injectable()
export class AppService  {
    name ="";
    constructor() {
    }

    set(name) {
      this.name = name; 
    }
    get(){
        return this.name;
    }
}