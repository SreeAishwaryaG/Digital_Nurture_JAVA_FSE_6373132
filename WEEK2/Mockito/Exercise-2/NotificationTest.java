package com.example.demo;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class NotificationTest {

    interface EmailService {
        void sendEmail(String to, String message);
    }

    @Test
    void testEmailSent() {
        // Arrange
        EmailService mockEmailService = mock(EmailService.class);

        // Act
        mockEmailService.sendEmail("test@example.com", "Hello!");

        // Assert - verify interaction
        verify(mockEmailService).sendEmail("test@example.com", "Hello!");
    }
}
