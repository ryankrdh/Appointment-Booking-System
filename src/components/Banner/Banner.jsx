import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DrMelo from '../../Images/a-doctor-melo.png';
import DentalChair from '../../Images/a-dental-chair.png';
import './Banner.css';
const Banner = () => {
	return (
		<section className="banner-all text-white">
			<Container>
				<Row className="align-items-center">
					<Col md={6} lg={6} sm={12}>
						<div className="section-title text-center">
							<h1>Mellow Dental</h1>
							<p>Your Smile Deserves Our Highest Attention</p>
						</div>
					</Col>
					<Col md={4} lg={4} sm={12}>
						<div className="banner-animate text-center">
							<img
								src={DentalChair}
								alt=""
								className="img-fluid animate-icon1"
							/>
							<img src={DrMelo} alt="" className="img-fluid animate-icon2" />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
