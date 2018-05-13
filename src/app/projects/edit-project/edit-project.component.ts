import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MemberToDisplay } from '../../models/MemberToDisplay.interface';
import { MatPaginator } from "@angular/material";
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit, AfterViewInit {
  state: boolean = false
  inProjectMembers: Array<MemberToDisplay> = []
  displayedColumns = ['name', 'lastName', 'projectCount', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(
    private _location: Location
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

  backClicked() {
    this._location.back();
  }

  changeDisplayState(){
    this.state = !this.state
  }

}

const ELEMENT_DATA: MemberToDisplay[] = [
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