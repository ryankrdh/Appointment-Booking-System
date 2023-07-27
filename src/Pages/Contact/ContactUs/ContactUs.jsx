import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
	return (
		<section className="contactUs-wrapper">
			<Container className="single-contactUs">
				<h1>Contact Us</h1>
				<p>
					You can reach us during our regular business hours. Please see our
					hours of operation below:
				</p>
				<div>
					<h3>Hours of Operation:</h3>
					<ul>
						<li>Monday: 9:00 AM - 5:00 PM</li>
						<li>Tuesday: 9:00 AM - 5:00 PM</li>
						<li>Wednesday: 9:00 AM - 5:00 PM</li>
						<li>Thursday: 9:00 AM - 5:00 PM</li>
						<li>Friday: 9:00 AM - 5:00 PM</li>
						<li>Saturday: 9:00 AM - 1:00 PM (By Appointment Only)</li>
						<li>Sunday: Closed</li>
					</ul>
				</div>
				<div>
					<h3>Contact Information:</h3>
					<p>Email: MellowDental@gmail.com</p>
					<p>Phone: (635) 647-2883</p>
					<p>Address: Melo Ave NE Seattle, WA</p>
				</div>
			</Container>
		</section>
	);
};

export default ContactUs;
