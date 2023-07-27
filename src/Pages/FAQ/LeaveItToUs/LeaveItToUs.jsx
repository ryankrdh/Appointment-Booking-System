import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import trustTeam from '../../../Images/a-dental-patient.jpeg';
import './LeaveItToUs.css';

const LeaveItToUs = () => {
	return (
		<section className="trustTeam-wrapper">
			<Container>
				<Row className="align-items-center">
					<Col lg={6}>
						<img src={trustTeam} alt="trustTeam" className="img-fluid" />
					</Col>
					<Col lg={6}>
						<div className="trustTeam-txt mt-5 mt-lg-0">
							<h2>Leave it to us!</h2>
							<p>
								We firmly believe that every individual deserves a healthy and
								confident smile. We are committed to delivering exceptional
								dental services that prioritize patient comfort and
								satisfaction. Our belief is that preventive care and patient
								education are the cornerstones of maintaining a lifetime of oral
								health. By embracing the latest advancements in dentistry and
								staying dedicated to ongoing education, we aim to exceed our
								patients' expectations and promote long-term dental wellness.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default LeaveItToUs;
