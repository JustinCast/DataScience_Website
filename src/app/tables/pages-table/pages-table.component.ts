import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { Page } from '../../models/Page.interface';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-pages-table',
  templateUrl: './pages-table.component.html',
  styleUrls: ['./pages-table.component.scss']
})
export class PagesTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public dialogRef: MatDialogRef<PagesTableComponent>,
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

  displayedColumns = ['select', 'title', 'link', 'description', 'upload_name'];
  dataSource = new MatTableDataSource<Page>(ELEMENT_DATA);
  selection = new SelectionModel<Page>(true, []);
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
const ELEMENT_DATA:Page []= [
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},
  {title:'page', link: 'https://github.com/angular', description: 'jsjdj', upload_name: 'luis'},

];
