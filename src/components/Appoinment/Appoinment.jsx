import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Appoinment.css';

import meloImage from '../../Images/a-melo.png';
import bobaImage from '../../Images/a-boba.png';

const Appoinment = () => {
	// To go to another page
	const navigate = useNavigate();

	// Date Menu
	const [selectedDate, setSelectedDate] = useState(null);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	// Doctor Menu
	const [doctorPreference, setDoctorPreference] = useState('');
	const handleDoctorChange = (event) => {
		setDoctorPreference(event.target.value);
	};

	let selectedDoctorImage = null;
	if (doctorPreference === 'Dr. Melo') {
		selectedDoctorImage = meloImage;
	} else if (doctorPreference === 'Dr. Boba') {
		selectedDoctorImage = bobaImage;
	}

	// Treatment Menu
	const [treatmentPreference, setTreatmentPreference] = useState('');
	const handleTreatmentChange = (event) => {
		setTreatmentPreference(event.target.value);
	};

	// Email validation
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');

	// const validateEmail = () => {
	// 	const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	// 	if (!isValidEmail) {
	// 		setEmailError('Please enter a valid email address.');
	// 	} else {
	// 		setEmailError('');
	// 		navigate('/messagereceived');
	// 	}
	// };

	// First name and last name validation
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [firstNameError, setFirstNameError] = useState('');
	const [lastNameError, setLastNameError] = useState('');

	const validateInput = () => {
		const isValidFirstName = /^[a-zA-Z]+$/.test(firstName);
		const isValidLastName = /^[a-zA-Z]+$/.test(lastName);
		const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		if (!isValidEmail) {
			setEmailError('Please enter a valid email address.');
		} else {
			setEmailError('');
		}
		if (!isValidFirstName) {
			setFirstNameError('Please enter a valid first name.');
		} else {
			setFirstNameError('');
		}
		if (!isValidLastName) {
			setLastNameError('Please enter a valid last name.');
		} else {
			setLastNameError('');
		}
		if (isValidEmail && isValidFirstName && isValidLastName) {
			setFirstNameError('');
			setLastNameError('');
			setEmailError('');
			navigate('/loading');
		}
	};

	// const validateName = () => {
	// 	const isValidFirstName = /^[a-zA-Z]+$/.test(firstName);
	// 	const isValidLastName = /^[a-zA-Z]+$/.test(lastName);
	// 	if (!isValidFirstName || !isValidLastName) {
	// 		setNameError('Please enter a valid first and last name.');
	// 	} else {
	// 		setNameError('');
	// 		navigate('/messagereceived');
	// 	}
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		validateInput();
		// validateName();
		// validateEmail();
	};

	return (
		<section className="appoinment-wrapper">
			<Container>
				<Row>
					<Col sm={12} md={12}>
						<div className="section-title">
							<h1 className="mt-5">Request Appointment</h1>
						</div>
						<div className="appoinment-form">
							<form action="#" className="row form-control">
								<Col md={3} lg={3}>
									<input
										type="text"
										placeholder="First Name"
										className="form-control"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
									{firstNameError && (
										<p className="error-text-name">{firstNameError}</p>
									)}
								</Col>
								<Col md={3} lg={3}>
									<input
										type="text"
										placeholder="Last Name"
										className="form-control"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
									{lastNameError && (
										<p className="error-text-name">{lastNameError}</p>
									)}
								</Col>
								<Col md={6} lg={6}>
									<input
										type="email"
										placeholder="Email"
										className="form-control"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									{emailError && (
										<p className="error-text-email">{emailError}</p>
									)}
								</Col>
								<Col md={6} lg={6}>
									<input
										type="phone"
										placeholder="Phone Number"
										className="form-control"
									/>
								</Col>
								<Col md={4} lg={4} className="doctor-pref ">
									<select
										value={doctorPreference}
										onChange={handleDoctorChange}
										className=""
									>
										<option value="">Select Doctor Preference</option>
										<option value="Dr. Melo">Dr. Melo</option>
										<option value="Dr. Boba">Dr. Boba</option>
									</select>
									{selectedDoctorImage && (
										<img
											src={selectedDoctorImage}
											alt={doctorPreference}
											className="doctor-image"
										/>
									)}
								</Col>
								<Col md={6} lg={6}>
									<DatePicker
										selected={selectedDate}
										onChange={handleDateChange}
										placeholderText="Select Date"
										className="form-control"
									/>
								</Col>
								<Col md={6} lg={6} className="treatment-pref">
									<select
										value={treatmentPreference}
										onChange={handleTreatmentChange}
										className=""
									>
										<option value="">Select Treatment</option>
										<option value="New Patient Exam">
											New Patient Exam + Cleaning
										</option>
										<option value="New Patient Exam">
											Recall Exam + Cleaning
										</option>
										<option value="Filling">Filling</option>
										<option value="Crown">Crown</option>
										<option value="Oral Surgery">Oral Surgery</option>
										<option value="New Ortho Appointment">
											New Ortho Appointment
										</option>
										<option value="Ongoing Ortho Appointment">
											Ongoing Ortho Appointment
										</option>
										<option value="Emergency">Emergency</option>
										<option value="Limited Exam">
											Limited Exam / Consultations
										</option>
									</select>
								</Col>
								<Col md={12} lg={12}>
									<textarea
										name="Message"
										cols="30"
										rows="10"
										placeholder="Please Provide Details."
										className="form-control"
									></textarea>
								</Col>
								<button
									className="theme-btn btn-fill form-btn mt-5 form-control"
									onClick={handleSubmit}
								>
									<span className="submit-text">Submit</span>
								</button>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Appoinment;
