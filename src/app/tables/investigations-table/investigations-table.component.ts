import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Investigation } from '../../models/Investigation.interface';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-investigations-table',
  templateUrl: './investigations-table.component.html',
  styleUrls: ['./investigations-table.component.scss']
})
export class InvestigationsTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  selection = new SelectionModel<Investigation>(true, []);
  addedMembers = []
  displayedColumns = ['selection', 'inv_name', 'inv_description', 'inv_members', 'inv_start_date', 'inv_finish_date'];
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(
    public dialogRef: MatDialogRef<InvestigationsTableComponent>,
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

let ELEMENT_DATA: Investigation[] = [
  { inv_name: "Investigación 1", inv_description: "Análisis del espectro del sonido", 
    inv_members: [
      { name: "Erick", lastName: "Quirós", projectCount: 2 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 2", inv_description: "Análisis de datos geográficos", 
    inv_members: [
      { name: "Justin", lastName: "Castillo", projectCount: 3 }, 
      { name: "Luis Carlos", lastName: "González", projectCount: 3 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 3", inv_description: "BD no relacionales para guardar datos geográficos", 
    inv_members: [
      { name: "Manuel", lastName: "Rodríguez", projectCount: 0 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 4", inv_description: "Bots en Telegram", 
    inv_members: [
      { name: "Anthony", lastName: "Cardona", projectCount: 2 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 5", inv_description: "Análisis de imágenes con asistencia de un dron", 
    inv_members: [
      { name: "Kevin", lastName: "González", projectCount: 2 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 6", inv_description: "Toro DB", 
    inv_members: [
      { name: "Isaac", lastName: "Ramírez", projectCount: 2 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 7", inv_description: "Análisis de datos de los bosques de Costa Rica", 
    inv_members: [
      { name: "Andrew", lastName: "Alvarado", projectCount: 1 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 8", inv_description: "Tráfico de datos en horas específicas en el TEC", 
    inv_members: [
      { name: "Pablo", lastName: "Brenes", projectCount: 1 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 9", inv_description: "Social Media Data Analysis", 
    inv_members: [
      { name: "Sarah", lastName: "Uriarte", projectCount: 1 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
  { inv_name: "Investigación 10", inv_description: "Estadísticas del padrón electoral", 
    inv_members: [
      { name: "Ángel", lastName: "Alvarado", projectCount: 1 } 
    ], inv_start_date: new Date(), inv_finish_date: new Date()
  },
];