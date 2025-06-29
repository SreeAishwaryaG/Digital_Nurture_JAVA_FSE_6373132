package com.example.demo;

public class WeatherApp {
	private WeatherService service;

	public WeatherApp(WeatherService service) {
		this.service = service;
	}

	public String displayWeather(String city) {
		return "Weather in " + city + ": " + service.getWeather(city);
	}
}
