import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    // Use Custom Hooks
    const [services] = useServices();
    const newServices = services.slice(0, 6);
    return (
        <div className="container">
            <div className="my-5">
                <Carousel variant="dark">
                    <Carousel.Item interval={3000}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://about.udemy.com/wp-content/uploads/2018/10/video-still-mohamad.jpg"
                                alt="First slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Always something new to learn</h3>
                                <p>"Talented people are everywhere, but opportunities can be harder to find. With Udemy, Mohammed."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://about.udemy.com/wp-content/uploads/2018/10/video-still-diversity-756x426.jpg"
                                alt="Second slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Our Marketplace</h3>
                                <p>"Whatever your learning style, we have a course that fits. Coming from instructors all over the world, our courses span over 65 languages and we cover anything you’d want to know."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className="d-flex align-items-center">
                            <img
                                className="d-block w-50"
                                src="https://about.udemy.com/wp-content/uploads/2018/10/video-still-alexa-756x426.jpg"
                                alt="Third slide"
                            />
                            <div className=" text-center p-5">
                                <h3>Our Instructors</h3>
                                <p>"Udemy instructors are real people who are passionate about sharing what they know with students all over the world."</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="my-5 text-center">
                <h1 className="text-color">A broad selection of services</h1>
                <p>Choose from 155,000 online video courses with new additions published every month</p>
            </div>
            <div className="container">
                <Row xs={1} md={3} className="g-5 mb-5 p-4">
                    {
                        newServices.map(service => <Course key={service.id} service={service}></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;