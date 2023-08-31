import React, { useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/Adventure1.jpeg';
import projImg2 from '../assets/img/Adventure2.png';
import projImg3 from '../assets/img/Adventure3.png';
import projImg4 from '../assets/img/Anime1.png';
import projImg5 from '../assets/img/Anime2.png';
import projImg6 from '../assets/img/Anime3.png';
import projImg7 from '../assets/img/Car1.png';
import projImg8 from '../assets/img/Car2.png';
import projImg9 from '../assets/img/Car3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
const project1 = [
    {
    title: 'User Account Page',
    description: 'User has access to customize their pfp as well as view and edit their posts',
    imgUrl: projImg2,
    },
    {
    title: 'Adventure Form',
    description: 'A form for users to post on the adventure they would like to share to our users',
    imgUrl: projImg1,
    },
    {
    title: 'Post Page',
    description: 'Page in which users can see the comments, intensity, price, and rating of the activity that was posted',
    imgUrl: projImg3,
    },
];

const project2 = [
    {
    title: 'Details Page',
    description: 'This is the page where it goes into greater details of each individual characters and their personality.',
    imgUrl: projImg4,
    },
    {
    title: 'Main Page',
    description: 'Section in which users can look through the list of animes',
    imgUrl: projImg5,
    },
    {
    title: 'Login',
    description: 'Login page',
    imgUrl: projImg6,
    }
]

const project3 = [
    {
    title: 'Home Page',
    description: 'Home page that are categorized in 3 sections from sales, services, and inventory',
    imgUrl: projImg7,
    },
    {
    title: 'Details',
    description: 'Inventory form in which the company can include a car from a specific manufacturer be included',
    imgUrl: projImg8,
    },
    {
    title: 'Details',
    description: 'Sales category in which users can set an appointment',
    imgUrl: projImg9,
    }
]


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
                    Presented here are a collection of projects I've developed both individually and in collaboration with talented professionals. This portfolio reflects my continuous journey in software development, spanning within six months.
                    Throughout this relatively short period, I've embraced numerous learning opportunities, gaining valuable insights and expertise. Each project represents a significant milestone in my coding expedition, and I've found immense satisfaction in every moment of this journey.
                    I invite you to explore these projects and feel free to share your insights if any. Your perspective is highly valuable as I continue to refine my skills and expand my horizons in the world of software development.
                    <b>Thank you!</b>
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
                        {project1.map((project1, index) => {
                            return (
                            <ProjectCard key={index} {...project1} />
                            );
                        })}
                        </Row>
                        <div className="project-title">Introducing Find & Seek!</div>
                        <p>
                            Your one-stop destination for finding and creating exciting activities in your desired locations. Our website utilizes Google API to help users explore, share, and engage with various posts about activities, all with a community-driven twist. Whether you're seeking adrenaline-pumping adventures, serene nature escapades, or simply a new way to unwind, Find & Seek has got you covered.
                        </p>
                        </div>
                        <div className="animate-on-visible">
                        <ul>
                            <li>Location-Based Activity Search: Our website leverages the power of Google API to enable users to search for activities in specific locations or explore nearby experiences effortlessly.</li>
                            <li>User-Generated Posts: Users can create and share posts about their favorite activities, providing detailed descriptions, images, and other relevant information to inspire others.</li>
                            <li>Likes and Comments: The platform encourages engagement and interaction between users through the ability to like and comment on posts. This fosters a supportive community where individuals can share their experiences and thoughts.</li>
                            <li>Filtering Options: Users can easily refine their activity searches with various filters, including price range, intensity level, and ratings. This ensures personalized recommendations tailored to individual preferences.</li>
                            <li>Activity Rating System: Users can rate activities they have experienced, contributing to a comprehensive rating system that assists others in making informed decisions.</li>
                        </ul>
                        <p>
                            <b>Skills: FastAPI · React.js · Python · CSS · JavaScript · Amazon AWS · SQL · Figma · Bootstrap · </b>
                            <a href="https://gitlab.com/team-safari/FindAndSeek" alt="gitlab link">Gitlab</a>
                        </p>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                        <div className="animate-on-visible">
                        <Row>
                        {project2.map((project2, index) => {
                            return (
                            <ProjectCard key={index} {...project2} />
                            );
                        })}
                        </Row>
                        <div className="project-title">Animethon!</div>
                        <p>
                            Welcome to our anime discovery hub, the ultimate platform for exploring and celebrating the captivating world of anime. My website harnesses the power of Google API to immerse users in a community-driven experience where they can uncover, share, and engage with a diverse array of anime series.
                            Whether you're on the hunt for heart-pounding action, tranquil journeys through nature, or a fresh way to unwind, my platform, 'Anime Explorer,' is your trusted companion. Dive into the world of anime like never before, and let your passion for these captivating stories flourish.
                        </p>
                        <div> 
                            This is my inaugural project in web development, built using Django, and represents my first venture into coding. The goal of this web application is to provide users with a curated list of top-rated anime series. It offers in-depth details about each show, including comprehensive character profiles.
                            The application aims to offer a seamless user experience by enabling users to discover highly recommended anime series. Additionally, it fosters interaction among users by providing features such as user registration and the ability to share thoughts and insights about different shows.
                            In summary, this project serves as an introduction to web development and coding. It empowers users to explore and discuss their favorite anime series, making it a valuable resource for anime enthusiasts.
                        </div>
                        <p>
                            <b>Skills: Django · Python · CSS · HTML · Bootstrap · Insomnia </b>
                            <a href="https://gitlab.com/ArtemisLiu93/my-first-django-project-anime-series" alt="gitlab link">Gitlab</a>
                        </p>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <div className="animate-on-visible">
                        <Row>
                        {project3.map((project3, index) => {
                            return (
                            <ProjectCard key={index} {...project3} />
                            );
                        })}
                        </Row>
                        <div className="project-title">Car City!</div>
                        <p>
                            Has your organization ever required a web application that empowers employees to effortlessly access sales data? Are you in need of a system that simplifies tasks like adding new customers or introducing new sales representatives? Perhaps you're seeking a solution to streamline appointment tracking. Look no further than Car City.
                            <br></br><br></br>Car City is a comprehensive web application that fulfills these needs and more. It offers intuitive features for looking up sales records, adding new customers and sales representatives, and efficiently managing appointments. Furthermore, Car City provides insightful sales history data, both for individual customers and various car models, enhancing your organization's data-driven decision-making capabilities.
                        </p>
                        <ul>
                            <li>Location-Based Activity Search: Our website leverages the power of Google API to enable users to search for activities in specific locations or explore nearby experiences effortlessly.</li>
                            <li>User-Generated Posts: Users can create and share posts about their favorite activities, providing detailed descriptions, images, and other relevant information to inspire others.</li>
                            <li>Likes and Comments: The platform encourages engagement and interaction between users through the ability to like and comment on posts. This fosters a supportive community where individuals can share their experiences and thoughts.</li>
                            <li>Filtering Options: Users can easily refine their activity searches with various filters, including price range, intensity level, and ratings. This ensures personalized recommendations tailored to individual preferences.</li>
                            <li>Activity Rating System: Users can rate activities they have experienced, contributing to a comprehensive rating system that assists others in making informed decisions.</li>
                        </ul>
                        <p>
                            <b>Skills: Django · React.js · Python · CSS · JavaScript · Docker · Bootstrap · </b>
                            <a href="https://gitlab.com/ArtemisLiu93/project-beta" alt="gitlab link">Gitlab</a>
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
