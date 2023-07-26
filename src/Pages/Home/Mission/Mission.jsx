import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPhoto from '../../../Images/a-Ryan.jpg';
import pomAnimated from '../../../Images/a-small-pom.gif';
import './Mission.css';

const About = () => {
	// sets the animation duration
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="about-wrapper">
			<Container>
				<Row>
					<Col md={12} lg={6}>
						<div className="about-right mt-5">
							<div className="about-content text-start" data-aos="slide-up">
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
								<a href="/dentist">Meet the Team</a>
							</div>
							<div className="about-img">
								<img
									src={pomAnimated}
									alt="pom-animated"
									className="img-fluid pom-animated"
								/>
							</div>
						</div>
					</Col>
					<Col md={12} lg={6}>
						<div className="about-img">
							<img
								src={myPhoto}
								alt="myPhoto"
								className="img-fluid my-photo mt-5"
							/>
						</div>
						<p className="text-align m-2">Ryan Kim</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
