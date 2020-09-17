package week6.assignments;

import org.testng.annotations.Test;

public class TestCase1 {
	
	@Test
	public void test1() {
		System.out.println("test 1");
		throw new RuntimeException();

	}

}
