import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Adventure1.jpeg';
import projImg2 from '../assets/img/Adventure2.png';
import projImg3 from '../assets/img/Adventure3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
const projects = [
    {
    title: 'User Account Page',
    description: 'User has access to customize their pfp as well as view and edit their posts',
    imgUrl: projImg2,
    },
    {
    title: 'Home',
    description: 'Design & Development',
    imgUrl: projImg1,
    },
    {
    title: 'Business Startup',
    description: 'Design & Development',
    imgUrl: projImg3,
    },
];

useEffect(() => {
    // Use animate.css classes when the component is visible
    const elementsToAnimate = document.querySelectorAll('.animate-on-visible');
    elementsToAnimate.forEach((element) => {
    element.classList.add('animate__animated', 'animate__slideInLeft');
    });
}, []);

return (
    <section className="project" id="projects">
    <Container>
        <Row>
        <Col size={12}>
            <TrackVisibility>
            {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                <h2>Projects</h2>
                <p>
                    Artemis Liu is simply dummy text of the printing and typesetting industry. Artemis Liu has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Find & Seek</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Anime</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Carcar</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                        <div className="animate-on-visible">
                        </div>
                        <div className="animate-on-visible">
                        <Row>
                        {projects.map((project, index) => {
                            return (
                            <ProjectCard key={index} {...project} />
                            );
                        })}
                        </Row>
                        <div>Introducing Find & Seek!</div>
                        <p>
                            Your one-stop destination for finding and creating exciting activities in your desired locations. Our website utilizes Google API to help users explore, share, and engage with various posts about activities, all with a community-driven twist. Whether you're seeking adrenaline-pumping adventures, serene nature escapades, or simply a new way to unwind, Discover & Connect has got you covered.
                        </p>
                        </div>
                        <div className="animate-on-visible">
                        <ul>Location-Based Activity Search: Our website leverages the power of Google API to enable users to search for activities in specific locations or explore nearby experiences effortlessly.</ul>
                        <ul>User-Generated Posts: Users can create and share posts about their favorite activities, providing detailed descriptions, images, and other relevant information to inspire others.</ul>
                        <ul>Likes and Comments: The platform encourages engagement and interaction between users through the ability to like and comment on posts. This fosters a supportive community where individuals can share their experiences and thoughts.</ul>
                        <ul>Filtering Options: Users can easily refine their activity searches with various filters, including price range, intensity level, and ratings. This ensures personalized recommendations tailored to individual preferences.</ul>
                        <ul>Activity Rating System: Users can rate activities they have experienced, contributing to a comprehensive rating system that assists others in making informed decisions.</ul>
                        <p>
                            <b>Skills: FastAPI · React.js · Python (Programming Language) · Cascading Style Sheets (CSS) · JavaScript ·</b>
                            <a href="https://gitlab.com/team-safari/FindAndSeek" alt="gitlab link">Gitlab</a>
                        </p>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="section">
                        <div className="animate-on-visible">
                        <p>
                            Artemis Liu dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                        </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <div className="animate-on-visible">
                        <p>
                            Artemis Liu dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                        </p>
                        </div>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </div>
            )}
            </TrackVisibility>
        </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
);
};
