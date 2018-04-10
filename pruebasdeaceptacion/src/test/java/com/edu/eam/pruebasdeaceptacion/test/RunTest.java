package com.edu.eam.pruebasdeaceptacion.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features",
				 name= {""},
				 glue = { "com.edu.eam.pruebasdeaceptacion.steps" }, 
				 plugin = { "html:reportes/cucumber-html-report-nil" })
public class RunTest {

	

}
