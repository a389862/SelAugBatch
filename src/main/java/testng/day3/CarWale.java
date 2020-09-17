package testng.day3;

import org.openqa.selenium.Keys;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;



public class CarWale {

	public static void main(String[] args) throws InterruptedException {

		WebDriverManager.chromedriver().setup();
		ChromeDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.carwale.com/");
		driver.findElementByXPath("//li[@data-tabs='usedCars']").click();
		
		driver.findElementById("usedCarsList").sendKeys("Chennai");
		Thread.sleep(500);
		driver.findElementById("usedCarsList").sendKeys(Keys.TAB);

	}
}
