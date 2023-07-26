import React from 'react';
import { Col } from 'react-bootstrap';
import './Resources.css';

const Resource = (props) => {
	const { title, img, author, link } = props.article;
	return (
		<Col md={6} lg={6} sm={12} xl={4}>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<div className="single-blog-card">
					<div className="card-thumb">
						<img src={img} alt={title} />
					</div>
					<div className="card-content text-start">
						<h3>{title}</h3>
						<div className="card-meta d-flex justify-content-between">
							<span>{author}</span>
						</div>
					</div>
				</div>
			</a>
		</Col>
	);
};

export default Resource;
