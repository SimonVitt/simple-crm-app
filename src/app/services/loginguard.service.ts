import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService {
  loggedIn: boolean = false;

  login(){
    let sessionId = makeRandom(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
    localStorage.setItem('loggedIn', sessionId);
    return sessionId;
  }

  constructor() { }
}

function makeRandom(lengthOfCode: number, possible: string) {
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}