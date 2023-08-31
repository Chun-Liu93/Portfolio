import html from "../assets/img/html-icon.png";
import css from "../assets/img/css-icon.png";
import react from "../assets/img/react-icon.png";
import bootstrap from "../assets/img/bootstrap.png";
import figma from "../assets/img/figma.png";
import django from "../assets/img/django.png";
import docker from "../assets/img/docker.png";
import postgressql from "../assets/img/PostgreSQL.png";
import sql from "../assets/img/sql.png";
import js from "../assets/img/js.png";
import rabbitmq from "../assets/img/rabbitmq.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import gitlab from "../assets/img/gitlab.png";
import python from "../assets/img/python.png";
import fastapi from "../assets/img/fastapi.png";
import s3 from "../assets/img/s3.png";
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
};

return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>"Here are the skills I'm proficient in as a software engineer:"</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={postgressql} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={rabbitmq} alt="Image" />
                                <h5>Rabbitmq</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={gitlab} alt="Image" />
                                <h5>Gitlab</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={fastapi} alt="Image" />
                                <h5>FastAPI</h5>
                            </div>
                            <div className="item">
                                <img src={s3} alt="Image" />
                                <h5>S3</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    )
}
