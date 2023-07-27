import AOS from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';
import dentalDirection from '../../../Images/a-dental-direction.mp4';
import directionMap from '../../../Images/a-direction-map.png';

const Details = () => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<section className="direction-details-sec">
				<Container>
					<Row>
						<Col md={12} lg={8}>
							<div className="direction-details" data-aos="zoom-in-up">
								<h1>Directions to Mellow Dental</h1>
								<ul>
									<li>
										Starting Location: Begin your journey from your current
										location or any designated starting point.
									</li>
									<li>
										Head North on Interstate 5 (I-5): If you are coming from the
										south or downtown Seattle, get on Interstate 5 Northbound.
										This is a major freeway that runs through the city.
									</li>
									<li>
										Take Exit 166 for Stewart Street: After a few miles on I-5,
										watch for Exit 166, which is Stewart Street. Take the
										off-ramp and follow signs for Stewart Street.
									</li>
									<li>
										Turn Right onto Stewart Street: Once you exit the freeway,
										turn right onto Stewart Street. This street will take you
										further into the city.
									</li>
									<li>
										Continue on Stewart Street: Follow Stewart Street for
										approximately 0.5 miles. Enjoy the city views as you drive.
									</li>
									<li>
										Turn Left onto 4th Avenue: At the intersection of Stewart
										Street and 4th Avenue, make a left turn onto 4th Avenue.
										This is a major street in Seattle.
									</li>
									<li>
										Continue on 4th Avenue: Stay on 4th Avenue and drive for
										about 1 mile. You'll pass through several downtown
										neighborhoods.
									</li>
									<li>
										Turn Right onto Spring Street: When you reach Spring Street,
										make a right turn. This street will lead you further into
										the city.
									</li>
									<li>
										Follow Spring Street: Drive for about 0.2 miles on Spring
										Street. Take your time and obey traffic signals.
									</li>
									<li>
										Arrive at Dental Office: After a short distance on Spring
										Street, you will arrive at our dental office on your
										right-hand side. Look for the dental sign and our building's
										name.
									</li>
								</ul>
							</div>
							<div className="direction-details" data-aos="zoom-in-up">
								<h2>Parking:</h2>
								<p>
									We have designated parking spaces available for our patients.
									If you're coming by car, you can park in our parking lot. If
									our lot is full, there are public parking options nearby.
								</p>
							</div>
							<div className="direction-details" data-aos="zoom-in-up">
								<h2>Public Transportation:</h2>
								<p>
									If you prefer public transportation, several bus routes serve
									the area around our dental office. Check the local transit
									authority's website for specific bus schedules and stops.
								</p>

								<p>
									Congratulations, you've arrived at our dental office in
									Seattle! We look forward to providing you with exceptional
									dental care and a welcoming experience. If you have any
									questions or need further assistance, feel free to contact our
									office. Safe travels!
								</p>
							</div>
						</Col>
						<Col md={12} lg={4}>
							<div className="single-direction-box-detail" data-aos="flip-left">
								<div className="service-icon">
									<video
										src={dentalDirection}
										autoPlay
										loop
										muted
										playsInline
										disableRemotePlayback
										className="video"
									/>
								</div>
							</div>
							<div>
								<img
									src={directionMap}
									alt="directionMap"
									className="single-direction-box-detail"
									data-aos="flip-left"
								/>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="pb-5">
				<Container>
					<Row className="align-items-center">
						<Col lg={6}>
							<div className="achivement-img-bg"></div>
						</Col>
						<Col lg={6}></Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Details;
