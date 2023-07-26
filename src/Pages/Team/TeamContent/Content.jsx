import React, { useEffect } from 'react';
import AOS from 'aos';
import { Col, Container, Row } from 'react-bootstrap';
import teamPhoto from '../../../Images/a-team-photo.jpg';
import './Content.css';

const Content = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="about-content-sec">
			<Container>
				<Row>
					<Col md={12} lg={8} className="text-center" data-aos="zoom-in-up">
						<div className="section-title-team">
							<h1>Meet The Team</h1>
						</div>
						<p className="mt-1 pt-1">
							Our friendly and efficient office staff is here to assist you with
							scheduling appointments, processing insurance claims, and
							answering any questions you may have about your dental care.
						</p>
						<p className="mt-1 pt-1">
							At our dental practice, we prioritize your comfort and well-being.
							Whether you need a routine check-up or advanced dental treatment,
							our team is here to provide you with personalized and
							comprehensive care. We look forward to welcoming you to our dental
							family and helping you achieve a healthy and beautiful smile!
						</p>
					</Col>
					<Col md={12} lg={4}>
						<div>
							<img
								src={teamPhoto}
								alt="teamPhoto"
								className="team-photo"
								data-aos="zoom-in"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Content;
