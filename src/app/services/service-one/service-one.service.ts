import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {

  val = Math.random();

  constructor() { }
}
