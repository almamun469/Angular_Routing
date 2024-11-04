import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  sendValue(){
    return [
      {
        id:1,
        name:'mamun',
        result:3.45
      },
      {
        id:2,
        name:'dipta',
        result:3.25
      },
      {
        id:3,
        name:'puspo',
        result:3.46
      }
    ]
  }

  constructor() { }
}
