import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Article } from '../../Data/Article';
import Edu from '../../Pages/Home/Resources/Resources';

const PatientEducation = () => {
	return (
		<section className="blog-wrapper pt-0">
			<Container>
				<Row>
					<Col sm={12} className="text-center">
						<div className="section-title">
							<h1>Patient Resources</h1>
						</div>
					</Col>
				</Row>
				<Row>
					{Article.map((edu) => (
						<Edu key={edu.id} article={edu} />
					))}
				</Row>
			</Container>
		</section>
	);
};

export default PatientEducation;
