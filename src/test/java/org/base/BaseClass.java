package org.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver d;
	public static void launchChrome() {
		WebDriverManager.chromedriver().setup();
		 d=new ChromeDriver();

	}
	public static void launchUrl(String url) {
		d.get(url);

	}
	public static void fill(WebElement e,String v) {
			e.sendKeys(v);

	}
	public static void btnclick(WebElement e) {
		e.click();

	}
	
	

}
