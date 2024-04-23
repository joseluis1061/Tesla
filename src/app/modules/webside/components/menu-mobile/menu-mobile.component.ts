import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styles: [':host {display: block; position: absolute; top: 0; left:0;}']
})
export class MenuMobileComponent {
  constructor(
    private dialogRef: DialogRef
  ) {}

  close() {
    this.dialogRef.close();
  }

}
