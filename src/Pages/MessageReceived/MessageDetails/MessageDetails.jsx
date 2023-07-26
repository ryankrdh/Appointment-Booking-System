import { React } from 'react';
import { Col, Row } from 'react-bootstrap';
import ryanPhoto from '../../../Images/a-Ryan1.jpg';
import toothRun from '../../../Images/a-tooth-run.gif';
import './MessageDetails.css';

const MessageDetails = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant',
	});
	return (
		<div className="message-wrapper">
			<Row>
				<Col>
					<h5 className="text-center mt-4 about-thank-you">
						Thank you, we'll reach out to you shortly regarding your
						appointment!
					</h5>
				</Col>
			</Row>
			<Row>
				<Col lg={12} className="m-4 d-flex justify-content-center">
					<img src={ryanPhoto} alt="ryanPhoto" className="about-my-photo" />
				</Col>
			</Row>
			<Row>
				<Col lg={12} className=" text-center">
					<img src={toothRun} alt="toothRun" />
				</Col>
			</Row>
		</div>
	);
};

export default MessageDetails;
