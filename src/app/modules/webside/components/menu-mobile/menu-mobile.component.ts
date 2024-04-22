import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html'
})
export class MenuMobileComponent {
  constructor(
    private dialogRef: DialogRef
  ) {}

  close() {
    this.dialogRef.close();
  }

}
