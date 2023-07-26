import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import marketingVideo from '../../../Images/a-dental-op.mp4';
import './Technology.css';

const Achivement = () => {
	return (
		<section className="achivement-wrap text-white">
			<Container>
				<Row className="align-items-center">
					<Col md={12} lg={12} sm={12}>
						<div className="section-title1 text-center">
							<h1>State-of-the-Art Technology</h1>
						</div>
						<div className="section-txt1 text-center">
							<p>Your care and comfort comes first.</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<video autoPlay loop muted className="market-video">
							<source src={marketingVideo} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Achivement;
