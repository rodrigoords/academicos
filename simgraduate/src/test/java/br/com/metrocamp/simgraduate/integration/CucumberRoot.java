package br.com.metrocamp.simgraduate.integration;

import br.com.metrocamp.simgraduate.SimgraduateApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;


@SpringBootTest(classes = SimgraduateApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@ContextConfiguration
public class CucumberRoot { }
