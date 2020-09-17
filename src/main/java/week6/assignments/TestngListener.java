package week6.assignments;

import org.testng.ITestListener;
import org.testng.ITestResult;

public class TestngListener implements ITestListener{
	
	
	public void onTestStart(ITestResult result) {
		System.out.println(result.getMethod());
	}

	
	
	public void onTestSuccess(ITestResult result) {
		System.out.println(result.getMethod());
	}
	
}
