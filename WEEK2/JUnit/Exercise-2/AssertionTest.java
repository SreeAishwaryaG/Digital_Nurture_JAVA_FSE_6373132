package com.example.demo;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class AssertionsTest {

	Calculator calc = new Calculator();

	@Test
	void testVariousAssertions() {
		int expected = 5;
		int actual = calc.add(2, 3);

		// Equality and inequality
		assertEquals(expected, actual, "Sum should be 5");
		assertNotEquals(4, actual, "Should not be 4");

		// True/False conditions
		assertTrue(actual == 5);
		assertFalse(actual == 6);

		// Null checks
		String name = "JUnit";
		assertNotNull(name);
		assertNull(null);

		// Reference checks
		String str1 = "Hello";
		String str2 = str1;
		String str3 = new String("Hello");

		assertSame(str1, str2); // same object
		assertNotSame(str1, str3); // different object instances

		// Exception check
		assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));

		// Grouped assertions
		assertAll("Grouped tests for name",
				() -> assertTrue(name.startsWith("J")),
				() -> assertFalse(name.endsWith("Z")),
				() -> assertEquals(5, name.length()));
	}
}
