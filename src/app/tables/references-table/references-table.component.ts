import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { ReferencesService } from '../../services/references.service';
import { MatPaginator, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Reference } from '../../models/Reference';

@Component({
  selector: 'app-references-table',
  templateUrl: './references-table.component.html',
  styleUrls: ['./references-table.component.scss'],
  providers: [ReferencesService]
})
export class ReferencesTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource
  selection = new SelectionModel<Reference>(true, []);
  addedMembers = []
  displayedColumns = ['selection', 'ref_id', 'description', 'pages', 'codes', 'documents'];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    public dialogRef: MatDialogRef<ReferencesTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private refService: ReferencesService
  ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.refService.getRefs());
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
