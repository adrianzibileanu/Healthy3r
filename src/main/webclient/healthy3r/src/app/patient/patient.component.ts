import { Component, OnInit } from '@angular/core';

import { Location } from  '@angular/common';

import { Patient } from '../patient';
import { iPatient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	
	patients: Patient[] = [];
	delPatient?: iPatient;
	idIndex?: number;
	


  constructor(private patientService: PatientService, private location: Location) { }

  ngOnInit(): void {
	  this.listPatients();
  }
  
  listPatients(): void{
	  this.patientService.getPatients().subscribe(patients => this.patients = patients);
  }
  
  delete(id: string): void{	
	    this.patientService.deletePatient(id).subscribe(() => window.location.reload());
  }
  

}
