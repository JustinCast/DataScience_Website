import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MemberToDisplay } from '../../models/MemberToDisplay.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styleUrls: ['./members-table.component.scss']
})
export class MembersTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<MemberToDisplay>(true, []);
  addedMembers = []
  displayedColumns = ['selection', 'name', 'lastName', 'projectCount'];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    public dialogRef: MatDialogRef<MembersTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addMember(i) {
    this.addedMembers.unshift(`${i.name} ${i.lastName}`)
  }

}
let ELEMENT_DATA: MemberToDisplay[] = [
  {name: 'Justin', lastName: "Castillo", projectCount: 3},
  {name: 'Albert', lastName: "González", projectCount: 2},
  {name: 'Francisco', lastName: "Corrales", projectCount: 1},
  {name: 'Alejandro', lastName: "Herrera", projectCount: 5},
  {name: 'Andres', lastName: "Herrera", projectCount: 5},
  {name: 'Julio', lastName: "Herrera", projectCount: 5},
  {name: 'Joshua', lastName: "Herrera", projectCount: 5},
  {name: 'Kevin', lastName: "Herrera", projectCount: 5},
  {name: 'Luis', lastName: "Herrera", projectCount: 5},
  {name: 'Armando', lastName: "Herrera", projectCount: 5},
  {name: 'Jason', lastName: "Herrera", projectCount: 5},
  {name: 'Diego', lastName: "Herrera", projectCount: 5},
  {name: 'Fernando', lastName: "Herrera", projectCount: 5},
  {name: 'Miguel', lastName: "Herrera", projectCount: 5},
  {name: 'Jeffry', lastName: "Herrera", projectCount: 5},
  {name: 'Randald', lastName: "Herrera", projectCount: 5},
  {name: 'Merelyn', lastName: "Herrera", projectCount: 5},
  {name: 'Bryan', lastName: "Herrera", projectCount: 5},
  {name: 'Felipe', lastName: "Herrera", projectCount: 5},
  {name: 'Josué', lastName: "Herrera", projectCount: 5},
];
