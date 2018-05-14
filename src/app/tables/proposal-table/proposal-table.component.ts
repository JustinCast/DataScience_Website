import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Proposal } from '../../models/Proposal';

@Component({
  selector: 'app-proposal-table',
  templateUrl: './proposal-table.component.html',
  styleUrls: ['./proposal-table.component.scss']
})
export class ProposalTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<Proposal>(true, []);
  displayedColumns = ['selection', 'prop_id', 'propName', 'proponents', 'description', 'propDate', 'propState', 'thematic'];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }

}

let ELEMENT_DATA: Proposal[] = [
  { propName: 'Propuesta 1', proponents: [
      { name: 'Justin Alberto', lastName: 'Castillo', projectCount: 5 },
      { name: 'Luis Carlos', lastName: 'González', projectCount: 5 },
      { name: 'Miguel Adán', lastName: 'Rivas', projectCount: 5 },
    ], 
  description: 'Radar de zonas en deforestación', propDate: new Date(), 
  propState: new Date(), thematic: { name: 'Prueba', studyArea: 'Ciencia', proposal: 0},
  prop_id: 0
  }
];