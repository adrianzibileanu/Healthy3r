import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Patient } from './patient';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
	
	private patientUrl = "http://localhost:8080/api/patients";
	private options = {
		headers: new HttpHeaders({'Content-type':'application/json','Authorization':'healthy3rPatients'})			
	}
	
    constructor(private http: HttpClient, private messagesService: MessagesService) { }
	
	getPatients(): Observable<Patient[]>{
		return this.http.get<Patient[]>(this.patientUrl)
				.pipe(tap(_ => this.log('fetched')), catchError(this.handleError<Patient[]>('getPatients()',[])));
	}
	
	getPatient(id: string): Observable<Patient>{
		const url = `${this.patientUrl}/${id}`;
		return this.http.get<Patient>(url)
				.pipe(tap(_ => this.log(`fetched patient id=${id}`)), catchError(this.handleError<Patient>(`getPatient id=${id}`)));
	}
	
	addPatient(patient: Patient): Observable<Patient>{
		return this.http.post<Patient>(this.patientUrl, patient, this.options)
				.pipe(tap((newPatient: Patient) => this.log(`added patient w/ id=${newPatient.id}`)), catchError(this.handleError<Patient>('addPatient')));				
	}
	
	updatePatient(patient: Patient): Observable<any>{
		var newUrl = this.patientUrl+"/"+patient.id;
		return this.http.put(newUrl, patient, this.options)
				.pipe(tap(_ => this.log(`updated patient id=${patient.id}`)), catchError(this.handleError<any>('updatePatient')));
	}
	
	deletePatient(id: string): Observable<Patient>{
		const url = `${this.patientUrl}/${id}`;
		return this.http.delete<Patient>(url, this.options)
				.pipe(tap(_ => this.log(`delete patient id=${id}`)), catchError(this.handleError<Patient>('deletePatient')));
	}
	
	private log(message: string){
	    this.messagesService.add(`PatientService: ${message}`);
	  }

	private handleError<T>(operation = 'operation', result?: T){
	    return (error: any): Observable<T> => {
	      console.error(error);
	      this.log(`${operation} failed: ${error.message}`);
	      return of(result as T); //returns empty result to keep the app working
	    };
	  }
	
}
