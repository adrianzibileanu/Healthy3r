package com.healthy3r.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class Healthy3rApplication {

	public static void main(String[] args) {
		SpringApplication.run(Healthy3rApplication.class, args);
	}

}
