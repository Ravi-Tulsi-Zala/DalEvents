import { Component, OnInit, NgModule, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig,MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {
  
 

  constructor(public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    
  }

  openDialog() {
    //"Angular Material Dialog: A Complete Example", Angular University, 2019. [Online]. Available: https://blog.angular-university.io/angular-material-dialog/. [Accessed: 04- Apr- 2019]
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CheckoutComponent, dialogConfig);
    
    console.log("Checkout function called")
  }

  submit(){
    this.dialog.closeAll();
    console.log("Event has been booked!");
  }

  cancel(){
    this.dialog.closeAll();
  }


}
