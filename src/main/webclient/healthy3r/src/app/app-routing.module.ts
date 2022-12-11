import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientComponent } from './patient/patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { HomeComponent } from './home/home.component';
import { PatientFormComponent } from './patient-form/patient-form.component';

const routes: Routes = [
      
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'patients', component: PatientComponent},
	{ path: 'patients/:id', component: PatientDetailComponent},
	{ path: 'new-patient', component: PatientFormComponent}
                        
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
