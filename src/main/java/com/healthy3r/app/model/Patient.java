package com.healthy3r.app.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.GenerationType;
import javax.persistence.GeneratedValue;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Document(collection = "patients")
public class Patient {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private String id;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String firstName;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String lastName;

	@NotNull
	@Size(max=100)
	@Indexed(unique = true)
	private String email;

	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private int age;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String birthDate;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String sex;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String bloodType;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private double weight;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String weightUnit;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private double height;
	
	@NotNull
	@Size(max=100)
	//@Indexed(unique = true)
	private String heightUnit;
	
	public Patient() {
		super();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getBloodType() {
		return bloodType;
	}

	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public String getWeightUnit() {
		return weightUnit;
	}

	public void setWeightUnit(String weightUnit) {
		this.weightUnit = weightUnit;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public String getHeightUnit() {
		return heightUnit;
	}

	public void setHeightUnit(String heightUnit) {
		this.heightUnit = heightUnit;
	}


}