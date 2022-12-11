import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
	
	patients: Patient[] = [];
	idIndex?: number;
	


  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
	  this.listPatients();
  }
  
  listPatients(): void{
	  this.patientService.getPatients().subscribe(patients => this.patients = patients);
  }
  
  delete(patient: Patient): void{
	    this.patients = this.patients.filter(p => p !== patient);
	    this.patientService.deletePatient(patient.id).subscribe();
  }

}
