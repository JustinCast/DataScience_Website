<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-investigation',
  templateUrl: './details-investigation.component.html',
  styleUrls: ['./details-investigation.component.scss']
})
export class DetailsInvestigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
=======
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-details-investigation',
  templateUrl: './details-investigation.component.html',
  styleUrls: ['./details-investigation.component.scss']
})
export class DetailsInvestigationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailsInvestigationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
>>>>>>> luis_dev
