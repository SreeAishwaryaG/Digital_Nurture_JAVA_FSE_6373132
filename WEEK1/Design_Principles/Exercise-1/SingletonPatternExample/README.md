# SingletonPatternExample

This project demonstrates the Singleton Design Pattern in Java using a thread-safe Logger class.

The `Logger` class ensures that only one instance is created and used throughout the application. It uses the `synchronized` keyword in the `getInstance()` method to make the implementation thread-safe.

A test class (`Main.java`) verifies that multiple calls to `Logger.getInstance()` return the same instance.

