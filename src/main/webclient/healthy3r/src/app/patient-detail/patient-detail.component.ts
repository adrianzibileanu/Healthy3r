import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

	@Input() patient?: Patient;
	editEnabled?: boolean;
	  units = UNITS;
	  sexes = SEX;
	  bloodTypes = BLOODTYPE;
	  weightFilter = {type: 'weight'};
	  heightFilter = {type: 'height'};
	  sexFilter = {type: 'sex'};
	  bloodTypeFilter = {type: 'bloodtype'};

	  editForm = this.fb.group({
		    id: [],
		    firstName: [null, [Validators.required]],
		    lastName: [null, [Validators.required]],
		    email: [null, [Validators.required]],
		    age: [null, [Validators.required]],
		    birthDate: [null, [Validators.required]],
		    sex: [null, [Validators.required]],
		    bloodType: [null, [Validators.required]],
		    weight: [null, [Validators.required]],
		    weightUnit: [null, [Validators.required]],
		    height: [null, [Validators.required]],
		    heightUnit: [null, [Validators.required]],
		  });

  constructor(
		  private patientService: PatientService,
		  private route: ActivatedRoute,
		  private location: Location,
		  private fb: FormBuilder) { }

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
    const patient = this.editFromForm();
	    if (patient){
	      this.patientService.updatePatient(patient).subscribe();// => this.goBack());
	      if(this.editEnabled){
	    	  this.editEnabled = false;
	      }
	    }
  }

  private editFromForm(): iPatient {
    return {
      ...new Patient(),
      id: this.patient?.id,
      firstName: this.editForm.get(['firstName'])!.value,
      lastName: this.editForm.get(['lastName'])!.value,
      email: this.editForm.get(['email'])!.value,
      age: this.editForm.get(['age'])!.value,
      birthDate: this.editForm.get(['birthDate'])!.value,
      sex: this.editForm.get(['sex'])!.value,
      bloodType: this.editForm.get(['bloodType'])!.value,
      height: this.editForm.get(['height'])!.value,
      heightUnit: this.editForm.get(['heightUnit'])!.value,
      weight: this.editForm.get(['weight'])!.value,
      weightUnit: this.editForm.get(['weightUnit'])!.value
    };
  }


  enableEditing(): void{
	  if (this.editEnabled){
		  this.editEnabled = false;
	  }else{
		  this.editEnabled = true;
	  }
  }

}
