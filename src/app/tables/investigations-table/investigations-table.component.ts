import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Investigation } from '../../models/Investigation.interface';


@Component({
  selector: 'app-investigations-table',
  templateUrl: './investigations-table.component.html',
  styleUrls: ['./investigations-table.component.scss']
})
export class InvestigationsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  addedMembers = []
  displayedColumns = ['inv_name', 'inv_description', 'inv_members', 'inv_start_date', 'inv_finish_date'];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(
    public dialogRef: MatDialogRef<InvestigationsTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}

let ELEMENT_DATA: Investigation[] = [
  { inv_name: "Investigación 1", inv_description: "Análisis del espectro del sonido", 
    inv_members: [
      { name: "Erick", lastName: "Quirós", projectCount: 2 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  }
];