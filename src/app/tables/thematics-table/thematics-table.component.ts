import { Component, OnInit,AfterViewInit, Inject, ViewChild} from '@angular/core';
import { MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { ThematicToDisplay } from '../../models/ThematicToDisplay.interface';

@Component({
  selector: 'app-thematics-table',
  templateUrl: './thematics-table.component.html',
  styleUrls: ['./thematics-table.component.scss']
})
export class ThematicsTableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ThematicsTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
