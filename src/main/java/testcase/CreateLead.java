package testcase;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CreateLead  {
	
	/*
	 * @BeforeTest public void setFileName() {
	 * 
	 * excelFileName = "CreateLead"; }
	 */
	

	@Test(dataProvider="fecthData", invocationCount=3,threadPoolSize = 3)
	public void runCreateLead(String username, String password, String comp,String fName,String lname) {
		WebDriverManager.chromedriver().setup();
		ChromeDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://leaftaps.com/opentaps/");
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.findElementById("username").sendKeys(username);
		driver.findElementById("password").sendKeys(password);
		driver.findElementByClassName("decorativeSubmit").click();
		driver.findElementByLinkText("CRM/SFA").click();
		driver.findElementByLinkText("Leads").click();
		driver.findElementByLinkText("Create Lead").click();
		driver.findElementById("createLeadForm_companyName").sendKeys(comp);
		driver.findElementById("createLeadForm_firstName").sendKeys(fName);
		driver.findElementById("createLeadForm_lastName").sendKeys(lname);
		driver.findElementByName("submitButton").click();
		
}
	
	
	@DataProvider(name="fecthData")
	public String[][] giveData() throws IOException {
		String[][] data = new String[1][5];
		
		data[0][0] = "demosalesmanager";
		data[0][1] = "crmsfa";
		data[0][2] = "TestLeaf";
		data[0][3] = "Hari";
		data[0][4] = "R";
		
		/*data[1][0] = "TestLeaf";
		data[1][1] = "Prasad";
		data[1][2] = "R";*/
		
		return data;
	}

	
	
	
	
	
}






