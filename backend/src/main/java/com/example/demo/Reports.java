package com.example.demo;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Entity
public class Reports 
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String reportName;

    @Lob
    private byte[] reportFile;

    private LocalDateTime uploadedAt;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReportName() {
        return reportName;
    }

    public void setReportName(String reportName) {
        this.reportName = reportName;
    }

    public byte[] getReportFile() {
        return reportFile;
    }

    public void setReportFile(byte[] reportFile) {
        this.reportFile = reportFile;
    }

    public LocalDateTime getUploadedAt() {
        return uploadedAt;
    }

    public void setUploadedAt(LocalDateTime uploadedAt) {
        this.uploadedAt = uploadedAt;
    }
}

interface ReportRepository extends JpaRepository<Reports, Integer> {
}

@Service
class ReportService 
{

    @Autowired
    private ReportRepository reportRepository;

    public List<Reports> getAllReports() {
        return reportRepository.findAll();
    }

    public Reports getReportById(int id) {
        return reportRepository.findById(id).orElse(null);
    }
}

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
class ReportController 
{

    @Autowired
    private ReportService reportService;

    @GetMapping
    public List<Reports> getAllReports() {
    	System.out.println("fetching reports");
        return reportService.getAllReports();
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<ByteArrayResource> downloadReport(@PathVariable int id) {
        Reports report = reportService.getReportById(id);
        if (report == null) {
            return ResponseEntity.notFound().build();
        }

        // Ensure the file data is not null or empty
        if (report.getReportFile() == null || report.getReportFile().length == 0) {
            return ResponseEntity.badRequest().body(null);
        }

        // Create a ByteArrayResource from the file data
        ByteArrayResource resource = new ByteArrayResource(report.getReportFile());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + report.getReportName() + "\"")
                .contentType(MediaType.APPLICATION_PDF) // Set the correct Content-Type
                .body(resource);
    }
}