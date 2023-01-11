import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  allUsers :any[] = [];
  dataIsLoaded: boolean = false;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {}

  ngOnInit(){
    this.firestore.collection('users').valueChanges({idField: 'costumIdName'}).subscribe((changes: any) => {
      this.allUsers = changes;
      this.dataIsLoaded = true;
    });
  }


  openDialogUser(){
    this.dialog.open(DialogAddUserComponent);
  }
}
