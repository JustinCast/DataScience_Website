import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-milestones-table',
  templateUrl: './milestones-table.component.html',
  styleUrls: ['./milestones-table.component.scss']
})
export class MilestonesTableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MilestonesTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
