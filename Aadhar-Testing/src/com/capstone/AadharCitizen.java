package com.capstone;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class AadharCitizen {
	static WebDriver webdriver = null;

	@Test
	public void ChromeBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"D:\\chromedriver.exe");
		webdriver = new ChromeDriver();
		webdriver.manage().window().maximize();
		System.out.println("Chrome Browser is Opened!!");
		
	}
	
	
	@Test
	public void CitizenCheck() {
		webdriver.get("http://localhost:4200/home");
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		webdriver.findElement(By.xpath("/html[1]/body[1]/app-root[1]/app-home[1]/div[1]/div[1]/a[1]")).click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		webdriver.get("http://localhost:4200/userlogin");
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		webdriver.findElement(By.id("citizen_id")).sendKeys("1");
		webdriver.findElement(By.id("password")).sendKeys("8940706361");
		webdriver.findElement(By.xpath("//button[normalize-space()='Login']")).click();
		
	}
	

}
