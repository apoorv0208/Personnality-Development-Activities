package com.example.demo;

import java.security.MessageDigest;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.*;
public class Email
{
	public void email(String email,String message,String name)
	{
		String to = "vaishnavic27022004@gmail.com";
		String from = "techtitan705@gmail.com";
		message = "\nName :- "+name+"\nEmail Id:- "+email+"\n"+message;
		String subject = "Personnality Development Activites website feedback.";
		sendEmail(message,subject,to,from);
	}
	public void sendEmail(String message,String subject,String to,String from)
	{
		String host = "smtp.gmail.com";
		
		Properties props = System.getProperties();
		System.out.println("Properties = "+props);
		
		//set host
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.ssl.protocols", "TLSv1.2"); // Ensure TLS 1.2+
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		
		Session session = Session.getInstance(props, new Authenticator ()
		{
			protected PasswordAuthentication getPasswordAuthentication()
			{
				return new PasswordAuthentication("techtitan705@gmail.com", "gbnl nmsn kjcu rwcn");
			}
		});
		session.setDebug(true);
		
		MimeMessage m = new MimeMessage(session);
		try
		{
			InternetAddress address = new InternetAddress(from);			
			m.setFrom(address);
			
			m.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
			
			m.setSubject(subject);
			
			m.setText(message);
			
			Transport.send(m);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}
