package com.healthy3r.app.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.healthy3r.app.model.Patient;

@Repository
public interface PatientRepository extends MongoRepository<Patient, String> {}
