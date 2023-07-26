import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer-bg">
			<Container>
				<Row className="text-white">
					<Col xs={6} md={4}>
						<div className="single-footer-widget">
							<div className="widget-title">
								<h2>Resources</h2>
							</div>
							<div className="widget-content">
								<NavLink
									href="https://willamettedental.com/wp-content/uploads/WDG-Patient-Info-Form_Jan2023_FNL_Fillable.pdf"
									target="_blank"
									className="footer-link"
								>
									New Patient Form
								</NavLink>
								<NavLink
									href="https://www.hca.wa.gov/assets/free-or-low-cost/80-020-release-information-authorization.pdf"
									target="_blank"
									className="footer-link"
								>
									HIPPA Form
								</NavLink>
								<NavLink
									href="https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/publications/cdt/ada_dental_claim_form_completion_instrutions.pdf"
									target="_blank"
									className="footer-link"
								>
									Insurance Form
								</NavLink>
								<NavLink href="/FAQ" className="footer-link">
									FAQ
								</NavLink>
							</div>
						</div>
					</Col>
					<Col xs={6} md={4}>
						<div className="single-footer-widget">
							<div className="widget-title">
								<h2>Services</h2>
							</div>
							<div className="widget-content">
								<NavLink href="/service" className="footer-link">
									General Dentistry
								</NavLink>
								<NavLink href="/service" className="footer-link">
									Same-Day Crowns
								</NavLink>
								<NavLink href="/service" className="footer-link">
									Orthodontics
								</NavLink>
								<NavLink href="/service" className="footer-link">
									Oral Surgery
								</NavLink>
							</div>
						</div>
					</Col>
					<Col xs={12} md={4}>
						<div className="single-footer-widget">
							<div className="widget-title">
								<h2>Contact</h2>
							</div>
							<div className="widget-content">
								<NavLink href="/contact" className="footer-link">
									Melo Ave NE Seattle, WA
								</NavLink>
								<NavLink href="/contact" className="footer-link">
									Phone: (635) 647-2883
								</NavLink>
								<NavLink href="/contact" className="footer-link">
									MellowDental@gmail.com
								</NavLink>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<div className="footer-copy-right text-center text-white">
				<p className="name"> Website by Ryan Kim </p>
			</div>
		</div>
	);
};

export default Footer;
