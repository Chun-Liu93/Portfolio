import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/chibi.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "Web Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="animate__animated animate__fadeIn">
                            <span className="tagline">Welcome to my Portfolio!</span>
                            <h1>{`Hi! I'm Artemis,`} <span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(toRotate)}><span className="wrap">{text}</span></span></h1>
                            <p>I excel at building efficient, user-friendly applications by combining creativity with technical proficiency.
                            Known for a strong work ethic, perseverance, and adaptability in fast-paced, collaborative environments.
                            Seeking new opportunities to contribute to exciting projects. Let's connect and create innovative solutions together.
                            </p>
                            <a href="https://www.linkedin.com/in/chun-liu97/" target="_blank" rel="noopener noreferrer">
                                <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="animate__animated animate__zoomIn">
                            <img src={headerImg} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
