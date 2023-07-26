import { React, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Loading.css';

const Loading = () => {
	const navigate = useNavigate();

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant',
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			navigate('/messagereceived');
		}, 3000);

		return () => clearTimeout(timeout);
	}, [navigate]);

	return (
		<Row className="loading-wrapper">
			<Col lg={12}>
				<div className="loading-page">
					<iframe
						title="Loading Page"
						src="https://giphy.com/embed/ZC3CkcI03G2bWG1P76"
						className="loading-gif"
					></iframe>
				</div>
			</Col>
		</Row>
	);
};

export default Loading;
