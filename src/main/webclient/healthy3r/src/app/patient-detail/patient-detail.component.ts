import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PatientService } from  '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
	
	@Input() patient?: Patient;
	editEnabled?: boolean;

  constructor(
		  private patientService: PatientService,
		  private route: ActivatedRoute,
		  private location: Location) { }

  ngOnInit(): void {
	  this.getPatient();
  }

  getPatient(): void{
	    const id = String(this.route.snapshot.paramMap.get('id'));
	    this.patientService.getPatient(id).subscribe(patient => this.patient = patient);
  }
  
  goBack(): void{
	    this.location.back();
  }
  
  save(): void{
	    if (this.patient){
	      this.patientService.updatePatient(this.patient).subscribe();// => this.goBack());
	      if(this.editEnabled){
	    	  this.editEnabled = false;
	      }
	    }
  }
  
  enableEditing(): void{
	  if (this.editEnabled){
		  this.editEnabled = false;
	  }else{
		  this.editEnabled = true;
	  }
  }
  
}
