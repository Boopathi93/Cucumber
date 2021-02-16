package org.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith (Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Feature\\background.feature",
glue="org.stepdefinition",dryRun=false,monochrome=true,plugin="html:target")
public class TestRunnerClass {
	

}
