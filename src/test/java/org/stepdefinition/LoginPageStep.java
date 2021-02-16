package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginPageStep {

	public static WebDriver d;

	@Given("To verify the login funnctionality and git the url")
	public void to_verify_the_login_funnctionality_and_git_the_url() {
		WebDriverManager.chromedriver().setup();
		d = new ChromeDriver();
		d.get("https://www.facebook.com/");
	}

	@When("user has to enter the username and password")
	public void user_has_to_enter_the_username_and_password(io.cucumber.datatable.DataTable dataTable) {

		List<List<String>> a = dataTable.asLists();
		d.findElement(By.id("email")).sendKeys(a.get(0).get(0));
		d.findElement(By.id("pass")).sendKeys(a.get(1).get(1));

	}

	@When("click the login button")
	public void click_the_login_button() {

		d.findElement(By.name("login")).click();

	}

	@Then("user able to enter the homepage")
	public void user_able_to_enter_the_homepage() {
		String url = d.getCurrentUrl();
		Assert.assertTrue("check the url", url.contains("privacy_mutation"));
	}

	@Given("user has to launch chrome and hit the url")
	public void user_has_to_launch_chrome_and_hit_the_url() {
		WebDriverManager.chromedriver().setup();
		d = new ChromeDriver();
		d.get("https://www.facebook.com/");

	}

	@When("user has click the forgetten password")
	public void user_has_click_the_forgetten_password() {
		WebElement forgetpass = d.findElement(By.xpath("//a[text()='Forgotten password?']"));
		forgetpass.click();

	}

	@When("user has to enter the mobile number")
	public void user_has_to_enter_the_mobile_number() {
		WebElement mobile = d.findElement(By.id("identify_email"));
		mobile.sendKeys("9500655005");
		WebElement search = d.findElement(By.id("did_submit"));
		search.click();

	}

	@Then("user should move to identify this account another way page")
	public void user_should_move_to_identify_this_account_another_way_page() {

	}

}
