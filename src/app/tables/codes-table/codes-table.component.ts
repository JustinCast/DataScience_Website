import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Code } from '../../models/Code.interface';

@Component({
  selector: 'app-codes-table',
  templateUrl: './codes-table.component.html',
  styleUrls: ['./codes-table.component.scss']
})
export class CodesTableComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
}

