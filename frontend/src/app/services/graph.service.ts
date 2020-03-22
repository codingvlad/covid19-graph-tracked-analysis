import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  liveGraph: any;
  workGraph: any;
  studyGraph: any;
  replenishGraph: any;
  entertainGraph: any;

  postalCodes: any;

  constructor() { }

  initGraph(postalCodesData: any): Array<string> {    
    return this.shuffle(postalCodesData.features
      .map(f => f.properties.plz.toString()))
      .slice(0, 3000);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
