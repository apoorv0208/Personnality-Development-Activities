package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from frontend origin
public class FeedbackController {

    @PostMapping
    public ResponseEntity<?> feedbackHandler(@RequestBody FeedbackRequest request) {
        try 
        {
            System.out.println("Feedback received - Email: " + request.getEmail() + ", Name: " + request.getName());
            Email emailService = new Email();
            emailService.email(request.getEmail(), request.getMessage(), request.getName());
            return ResponseEntity.ok().body("{\"message\": \"Message received successfully!\"}");
        } 
        catch (Exception e) 
        {
            System.err.println("Error processing feedback: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"error\": \"An error occurred while processing your request.\"}");
        }
    }
}

class FeedbackRequest {
    private String name;
    private String email;
    private String message;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}