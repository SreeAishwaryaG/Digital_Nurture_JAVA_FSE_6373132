package com.example.demo;

import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

	private Calculator calculator;

	@BeforeEach
	void setUp() {
		System.out.println("Setting up Calculator instance...");
		calculator = new Calculator(); // Arrange
	}

	@AfterEach
	void tearDown() {
		System.out.println("Cleaning up after test...");
		calculator = null;
	}

	@Test
	void testAdd() {
		// Act
		int result = calculator.add(5, 3);

		// Assert
		assertEquals(8, result, "Addition should return correct result");
	}

	@Test
	void testMultiply() {
		// Act
		int result = calculator.multiply(4, 2);

		// Assert
		assertEquals(8, result);
	}

	@Test
	void testDivide() {
		// Act
		int result = calculator.divide(10, 2);

		// Assert
		assertEquals(5, result);
	}

	@Test
	void testDivideByZeroThrowsException() {
		// Assert (with act inside)
		assertThrows(ArithmeticException.class, () -> {
			calculator.divide(10, 0);
		});
	}
}
