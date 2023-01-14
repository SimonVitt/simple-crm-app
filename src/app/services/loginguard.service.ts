import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService {
  sessionId!:string;

  constructor(private firestore: AngularFirestore, private router: Router) { }

  login(documentId:string){
    this.sessionId = makeRandom(12, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
    console.log(documentId);
    this.firestore.doc(`loginusers/${documentId}`).update({sessionId: this.sessionId}); 
    localStorage.setItem('sessionId', this.sessionId);
    return this.sessionId;
  }

  getSessionId(){
    return this.sessionId;
  }
}

function makeRandom(lengthOfCode: number, possible: string) {
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}