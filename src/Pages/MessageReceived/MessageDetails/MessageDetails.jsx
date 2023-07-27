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
				<Col lg={12}>
					<h5 className="text-center mt-4 about-thank-you">
						Thank you, we'll reach out to you shortly regarding your
						appointment!
					</h5>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<div className="details-my-photo-div">
						<img src={ryanPhoto} alt="ryanPhoto" className="details-my-photo" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={12}>
					<div className="details-my-photo-div">
						<img src={toothRun} alt="toothRun" className="details-tooth-run" />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MessageDetails;
