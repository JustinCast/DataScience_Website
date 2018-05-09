import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowReferencesComponent } from '../show-references/show-references.component';
import { AddCodeComponent } from '../add-code/add-code.component';
import { AddPageComponent } from '../add-page/add-page.component';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {

  constructor(){}
  
  ngOnInit() {
  }

}
