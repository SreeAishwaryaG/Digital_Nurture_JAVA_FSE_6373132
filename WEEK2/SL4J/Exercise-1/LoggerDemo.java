package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerDemo {
    private static final Logger logger = LoggerFactory.getLogger(LoggerDemo.class);

    public static void main(String[] args) {
        logger.info("Application started");
        logger.warn("This is a warning message");
        logger.error("This is an error message");
    }
}
