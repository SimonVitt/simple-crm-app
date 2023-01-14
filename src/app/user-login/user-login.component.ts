import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginguardService } from '../services/loginguard.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  email :any;
  password :any;
  allLoginUsers : any;
  currentUser:any;
  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore, private router: Router, private loginguard: LoginguardService) {}
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  ngOnInit(){
    console.log()
    this.firestore.collection('loginusers').valueChanges({idField: 'costumIdName'}).subscribe((changes: any) => {
      this.allLoginUsers = changes;
    });
  }

  tryLogin(){
    this.currentUser = this.allLoginUsers.filter((user: { email: string | null | undefined; }) => user.email === this.loginForm.value.email);
    if(this.currentUser[0].password === this.loginForm.value.password){
      console.log(this.currentUser);
      let sessionId = this.loginguard.login(this.currentUser[0].costumIdName); 
      this.router.navigateByUrl('main');
    }
  }
}
