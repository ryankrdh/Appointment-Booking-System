import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { Col } from 'react-bootstrap';
import './Services.css';

const Services = (props) => {
	const { id, title, description, link, flippedDescription, video } =
		props.treatment;

	const serviceRef = useRef(null);
	const [showDetails, setShowDetails] = useState(false);

	const handleServiceBoxClick = () => {
		setShowDetails((prevShowDetails) => !prevShowDetails);
	};

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
		AOS.refresh();
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (serviceRef.current && !serviceRef.current.contains(event.target)) {
				setShowDetails(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<Col md={6} lg={6} xl={4} xs={12}>
				<div
					className={`single-service-box ${showDetails ? 'flipped' : ''}`}
					ref={serviceRef}
					onClick={handleServiceBoxClick}
				>
					<div className="service-icon">
						{showDetails ? (
							<div className="details">
								<p>{flippedDescription}</p>
							</div>
						) : (
							<video
								src={video}
								autoPlay
								loop
								muted
								playsInline
								disableRemotePlayback
								className="video"
							/>
						)}
					</div>
					<h3>{title}</h3>
					{showDetails ? null : <a href="#services">{link}</a>}
				</div>
			</Col>
		</>
	);
};

export default Services;

// import React, { useEffect, useRef, useState } from 'react';
// import AOS from 'aos';
// import { Col } from 'react-bootstrap';
// import './Services.css';

// const Services = (props) => {
// 	const { id, title, description, link, flippedDescription, video } =
// 		props.treatment;

// 	const serviceRef = useRef(null);
// 	const [flippedServiceId, setFlippedServiceId] = useState(null);
// 	const [showDetails, setShowDetails] = useState(false);

// 	const handleServiceBoxClick = () => {
// 		setFlippedServiceId((prevFlippedServiceId) =>
// 			prevFlippedServiceId === id ? null : id
// 		);
// 	};

// 	useEffect(() => {
// 		AOS.init({
// 			duration: 2000,
// 		});
// 		AOS.refresh();
// 	}, []);

// 	useEffect(() => {
// 		const handleClickOutside = (event) => {
// 			if (serviceRef.current && !serviceRef.current.contains(event.target)) {
// 				setShowDetails(false);
// 			}
// 		};

// 		document.addEventListener('mousedown', handleClickOutside);

// 		return () => {
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<Col md={6} lg={6} xl={4} xs={12}>
// 				<div
// 					className={`single-service-box ${showDetails ? 'flipped' : ''}`}
// 					ref={serviceRef}
// 					onClick={handleServiceBoxClick}
// 				>
// 					<div className="service-icon">
// 						{flippedServiceId === id ? (
// 							<div className="details">
// 								<p>{flippedDescription}</p>
// 							</div>
// 						) : (
// 							<video src={video} autoPlay loop muted className="video" />
// 						)}
// 					</div>
// 					<h3>{title}</h3>
// 					{showDetails ? (
// 						<div className="details">
// 							<p>{description}</p>
// 						</div>
// 					) : (
// 						<a href="#services">{link}</a>
// 					)}
// 				</div>
// 			</Col>
// 		</>
// 	);
// };

// export default Services;

// import AOS from 'aos';
// import React, { useEffect } from 'react';
// import { Col } from 'react-bootstrap';
// import './Services.css';

// const Services = (props) => {
// 	const { title, description, link, video } = props.treatment;

// 	useEffect(() => {
// 		AOS.init({
// 			duration: 2000,
// 		});
// 		AOS.refresh();
// 	}, []);
// 	return (
// 		<>
// 			<Col md={6} lg={6} xl={4} xs={12}>
// 				<div className="single-service-box" data-aos="flip-left">
// 					<div className="service-icon">
// 						<video src={video} autoPlay loop muted className="video" />
// 					</div>
// 					<h3>{title}</h3>
// 					<p>{description}</p>
// 					<a href="/service">{link}</a>
// 				</div>
// 			</Col>
// 		</>
// 	);
// };

// export default Services;
