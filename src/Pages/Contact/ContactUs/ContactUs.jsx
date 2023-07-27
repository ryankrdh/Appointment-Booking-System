import { React, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import dentalOnline from '../../../Images/a-dental-online.mp4';
import './ContactUs.css';

const ContactUs = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="contactUs-wrapper">
			<Container className="single-contactUs">
				<Row>
					<Col md={12} lg={8}>
						<h1>Contact Us</h1>
						<p>Please see our hours of operation below:</p>
						<div data-aos="zoom-in-up">
							<h3>Hours of Operation:</h3>
							<p>Monday: 9:00 AM - 5:00 PM</p>
							<p>Tuesday: 9:00 AM - 5:00 PM</p>
							<p>Wednesday: 9:00 AM - 5:00 PM</p>
							<p>Thursday: 9:00 AM - 5:00 PM</p>
							<p>Friday: 9:00 AM - 5:00 PM</p>
							<p>Saturday: 9:00 AM - 1:00 PM</p>
							<p>Sunday: Closed</p>
						</div>
						<div data-aos="zoom-in-up">
							<h3>Contact Information:</h3>
							<p>Email: MellowDental@gmail.com</p>
							<p>Phone: (635) 647-2883</p>
							<p>Address: Melo Ave NE Seattle, WA</p>
						</div>
					</Col>
					<Col md={12} lg={4}>
						<div className="single-contact-box-detail" data-aos="flip-left">
							<div className="service-icon">
								<video
									src={dentalOnline}
									autoPlay
									loop
									muted
									playsInline
									disableRemotePlayback
									className="video"
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactUs;
