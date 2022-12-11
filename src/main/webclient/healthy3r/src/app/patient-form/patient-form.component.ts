import { Component, OnInit } from '@angular/core';

import { Patient } from '../patient';
import { PatientService } from  '../patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patients: Patient[] = [];
	
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }
  
  add(
	
	firstName: string,
	lastName: string,
	email: string,
	age: number,
	birthDate: string,
	sex: string,
	bloodType: string,
	weight: number,
	weightUnit: string,
	height: number,
	heightUnit: string
		  
  ): void{
	  
	  if(!firstName && !lastName && !email && !age && !birthDate && !sex && !bloodType && !weight && !weightUnit && !height && !heightUnit){return;}
	  this.patientService.addPatient({ firstName, lastName, email, age, birthDate, sex, bloodType, weight, weightUnit, height, heightUnit} as Patient)
	  .subscribe(newPatient => this.patients.push(newPatient));
	  
  }

}
