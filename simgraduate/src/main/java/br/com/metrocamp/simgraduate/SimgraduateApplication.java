package br.com.metrocamp.simgraduate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@EnableJpaRepositories
@EnableJpaAuditing
public class SimgraduateApplication {

	public static void main(String[] args) {
		SpringApplication.run(SimgraduateApplication.class, args);
	}
}
