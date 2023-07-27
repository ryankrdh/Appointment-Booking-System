import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import award from '../../../Images/a-bsb.png';
import './Awards.css';

const Awards = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, []);
	return (
		<section className="awards-wrapper">
			<Container>
				<Row>
					<Col sm={12}>
						<div className="section-title">
							<h1>Awards</h1>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col md={6} lg={4} sm={12}>
						<div className="award-box text-center" data-aos="fade-right ">
							<div className="award-img">
								<img src={award} alt="Award" />
							</div>
							<h3 className="mt-4">Best of the Best!</h3>
						</div>
					</Col>
					<Col md={6} lg={8} sm={12}>
						<div className="review-item text-start" data-aos="zoom-out">
							<h5>The Official Community Choice Award</h5>
							<p>
								This prestigious award is presented only to dentists who
								demonstrate exceptional credentials, experience and commitment
								to excellence.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Awards;
