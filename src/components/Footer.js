import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
return (
    <footer className="footer">
    <Container>
        <Row className="align-items-center">
        {/* <MailchimpForm /> */}
        <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/chun-liu97/"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.behance.net/gallery/44168651/Class-Assignments"><img src={navIcon4} alt="Icon" /></a>
            <a href="https://www.instagram.com/artemis.unagi/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
        </Col>
        </Row>
    </Container>
    </footer>
)
}
