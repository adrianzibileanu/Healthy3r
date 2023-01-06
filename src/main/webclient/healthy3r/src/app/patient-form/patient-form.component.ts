import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Location } from '@angular/common';

import { Patient } from '../patient';
import { iPatient } from '../patient';
import { PatientService } from  '../patient.service';
import { UNITS } from '../constants/unit-constants';
import { SEX } from '../constants/sex-constants';
import { BLOODTYPE } from '../constants/bloodtype-constants';
import { Unit } from '../unit';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patients: Patient[] = [];
  newPatient: any;
  units = UNITS;
  sexes = SEX;
  bloodTypes = BLOODTYPE;
  weightFilter = {type: 'weight'};
  heightFilter = {type: 'height'};
  sexFilter = {type: 'sex'};
  bloodTypeFilter = {type: 'bloodtype'};
  
  createForm = this.fb.group({
	    id: [],
	    firstName: [null, [Validators.required], [Validators.minLength(3)]],
	    lastName: [null, [Validators.required]],
	    email: [null, [Validators.required], [Validators.email]],
	    age: [null, [Validators.required]],
	    birthDate: [null, [Validators.required]],
	    sex: [null, [Validators.required]],
	    bloodType: [null, [Validators.required]],
	    weight: [null, [Validators.required]],
	    weightUnit: [null, [Validators.required]],
	    height: [null, [Validators.required]],
	    heightUnit: [null, [Validators.required]],
	  });
	
  constructor(private patientService: PatientService, private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
  }
  
  add(): void{
	  
	  const patient = this.createFromForm();
	  this.subscribeToSaveResponse(this.patientService.addPatient(patient));//newPatient => this.patients.push(newPatient));
	  
  }
  
  private createFromForm(): iPatient {
	    return {
	      ...new Patient(),
	      id: this.createForm.get(['id'])!.value,
	      firstName: this.createForm.get(['firstName'])!.value,
	      lastName: this.createForm.get(['lastName'])!.value,
	      email: this.createForm.get(['email'])!.value,
	      age: this.createForm.get(['age'])!.value,
	      birthDate: this.createForm.get(['birthDate'])!.value,
	      sex: this.createForm.get(['sex'])!.value,
	      bloodType: this.createForm.get(['bloodType'])!.value,
	      height: this.createForm.get(['height'])!.value,
	      heightUnit: this.createForm.get(['heightUnit'])!.value,
	      weight: this.createForm.get(['weight'])!.value,
	      weightUnit: this.createForm.get(['weightUnit'])!.value
	    };
	  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<iPatient>>): void {
	    result.subscribe(() => this.location.back());
	  }

}
