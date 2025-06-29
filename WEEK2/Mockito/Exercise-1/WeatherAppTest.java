package com.example.demo;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class WeatherAppTest {

    @Test
    public void testDisplayWeather() {
        // Arrange: Create mock
        WeatherService mockService = mock(WeatherService.class);
        when(mockService.getWeather("Chennai")).thenReturn("Sunny");

        WeatherApp app = new WeatherApp(mockService);

        // Act
        String result = app.displayWeather("Chennai");

        // Assert
        assertEquals("Weather in Chennai: Sunny", result);
    }
}
