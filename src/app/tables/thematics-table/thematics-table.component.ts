import { Component, OnInit,AfterViewInit, Inject, ViewChild} from '@angular/core';
import { MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { ThematicToDisplay } from '../../models/ThematicToDisplay.interface';

@Component({
  selector: 'app-thematics-table',
  templateUrl: './thematics-table.component.html',
  styleUrls: ['./thematics-table.component.scss']
})
export class ThematicsTableComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public dialogRef: MatDialogRef<ThematicsTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {  
  }
  displayedColumns = ['select', 'name', 'studyArea', 'proposal', 'blog'];
  dataSource = new MatTableDataSource<ThematicToDisplay>(ELEMENT_DATA);
  selection = new SelectionModel<ThematicToDisplay>(true, []);
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}


const ELEMENT_DATA:ThematicToDisplay []= [
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'algo', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'some ', studyArea: 'Hydrogen', proposal: 8, blog: 9},
  {name:'Tematica', studyArea: 'Hydrogen', proposal: 8, blog: 9},
];