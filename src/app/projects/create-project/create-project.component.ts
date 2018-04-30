import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MemberToDisplay } from '../../models/MemberToDisplay.interface';
import { MatPaginator } from "@angular/material";
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, AfterViewInit {
  investigations = [
    "Investigación 1", 
    "Investigación 2",
    "Investigación 3"
  ]
  references = [
    "Referencia 1", 
    "Referencia 2",
    "Referencia 3"
  ]
  proposal = [
    "Referencia 1", 
    "Referencia 2",
    "Referencia 3"
  ]
  displayedColumns = ['name', 'lastName', 'projectCount', 'actions'];
  addedMembers = []
  addedReferences = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor() { }

  ngOnInit() {
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addMember(i) {
    this.addedMembers.unshift(`${i.name} ${i.lastName}`)
  }
  addReference(i) {
    this.addedReferences.unshift(i)
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
