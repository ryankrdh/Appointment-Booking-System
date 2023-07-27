import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPhoto from '../../../Images/a-Ryan.jpg';
import './Mission.css';

const Mission = () => {
	useEffect(() => {
		AOS.init({
			duration: 600,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="mission-wrapper">
			<Container>
				<Row>
					<Col md={12} lg={6}>
						<div className="mission-left mt-5">
							<div className="mission-content text-start" data-aos="zoom-in">
								<h1>Our Mission:</h1>
								<p>
									Our mission as a dental team is to work together as a unit to
									provide the best dental care available for all ages, caring
									for them as we would family members. We treat our patients
									with patience and kindness. We are committed as a team to
									avoid complacency, choosing instead to stay on the cutting
									edge of dentistry through continuing education and use of the
									latest and best treatment modalities, materials, sterilization
									techniques, and technology.
								</p>
								<a href="/team">Meet the Team</a>
							</div>
						</div>
					</Col>
					<Col md={12} lg={6} data-aos="zoom-in">
						<div className=" center-name-photo">
							<img src={myPhoto} alt="myPhoto" className=" my-photo mt-5" />
						</div>
						<p className="mt-2 my-name">Ryan Kim</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Mission;
