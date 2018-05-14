import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  constructor(
    public dialogRef: MatDialogRef<ProposalTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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