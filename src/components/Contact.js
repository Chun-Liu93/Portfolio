import React, { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
    const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (event) => {
    setFormState({
        ...formState,
        [event.target.name]: event.target.value
    });
    };

    const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.firstName || !formState.lastName || !formState.email || !formState.message) {
        setErrorMessage("All fields must be filled out.");
    } else if (!validateEmail(formState.email)) {
        setErrorMessage("Invalid email format.");
    } else {
        setErrorMessage(null);
        setButtonText('Sending...')
        const apiKey = process.env.REACT_APP_FORMSPREE_API_KEY;

        fetch(apiKey, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        if (data.ok) {
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
            setButtonText("Send");
            // setStatus({ success: true, message: "Message Sent"});
            <p className="success-message">{successMessage}</p>;
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
        })
        .catch((error) => {
        setErrorMessage("An error occurred.");
        console.error('Error:', error);
        })
        .finally(() => {
            setButtonText('Send');
        })
    }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                <Col size={12} md={6}>
                        <img src={contactImg} alt="Contact Us" />
                </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} className="px-1">
                                    <input
                                    className="form-input form-control"
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={formState.firstName}
                                    onChange={handleInputChange}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input
                                    className="form-input form-control"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={formState.lastName}
                                    onChange={handleInputChange}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <input
                                    className="form-input form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formState.email}
                                    onChange={handleInputChange}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea
                                    className="form-input form-control text-input"
                                    name="message"
                                    placeholder="Message"
                                    value={formState.message}
                                    onChange={handleInputChange}
                                    />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <button type="submit">
                                    <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {status.message && (
                                    <Col className="contact-status" sm={12}>
                                        <p className={status.success === false ? "danger" : "success"}>
                                            {status.message}
                                        </p>
                                    </Col>
                                )}
                                {successMessage && (
                                    <p className="success-message">{successMessage}</p>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
