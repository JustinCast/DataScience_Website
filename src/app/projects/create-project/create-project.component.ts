import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MemberToDisplay } from '../../models/MemberToDisplay.interface';
import { MatPaginator } from "@angular/material";
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
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
  addedReferences = []

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  addReference(i) {
    this.addedReferences.unshift(i)
  }

}
