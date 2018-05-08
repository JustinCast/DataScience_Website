<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-investigation',
  templateUrl: './modify-investigation.component.html',
  styleUrls: ['./modify-investigation.component.scss']
})
export class ModifyInvestigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
=======
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modify-investigation',
  templateUrl: './modify-investigation.component.html',
  styleUrls: ['./modify-investigation.component.scss']
})
export class ModifyInvestigationComponent implements OnInit {

    constructor(
    public dialogRef: MatDialogRef<ModifyInvestigationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
>>>>>>> origin/luis_dev
