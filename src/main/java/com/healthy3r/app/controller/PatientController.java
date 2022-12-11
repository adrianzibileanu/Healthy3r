package com.healthy3r.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import javax.validation.Valid;

import com.healthy3r.app.repo.PatientRepository;
import com.healthy3r.app.model.Patient;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepository;
	
	@GetMapping("/patients")
	public List<Patient> getPatients(){
		Sort sortByNameDesc = Sort.by(Sort.Direction.DESC, "createdAt");
		return patientRepository.findAll(sortByNameDesc);
	}
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient> getPatient(@Valid @PathVariable("id") String id){
	     return patientRepository.findById(id)
	    		 .map(patient -> ResponseEntity.ok().body(patient))
	    		 .orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping("/patients")
	public Patient addPatient(@Valid @RequestBody Patient patient){
		return patientRepository.save(patient);
	}
	
	@PutMapping("/patients/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable("id") String id, @Valid @RequestBody Patient patientData){
		return patientRepository.findById(id)
				.map(patient -> {
					patient.setFirstName(patientData.getFirstName());
					patient.setLastName(patientData.getLastName());
					patient.setEmail(patientData.getEmail());
					patient.setAge(patientData.getAge());
					patient.setBirthDate(patientData.getBirthDate());
					patient.setSex(patientData.getSex());
					patient.setBloodType(patientData.getBloodType());
					patient.setWeight(patientData.getWeight());
					patient.setWeightUnit(patientData.getWeightUnit());
					patient.setHeight(patientData.getHeight());
					patient.setHeightUnit(patientData.getHeightUnit());
					Patient updatedPatient = patientRepository.save(patient);
					return ResponseEntity.ok().body(updatedPatient);
				}).orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<?> deletePatient(@Valid @PathVariable("id") String id){
		return patientRepository.findById(id)
				.map(patient -> {
					patientRepository.deleteById(id);
					return ResponseEntity.ok().build();
				}).orElse(ResponseEntity.notFound().build());
	}
}
