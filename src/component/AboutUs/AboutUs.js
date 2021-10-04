import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="d-flex align-items-center">
                <div>
                    <h1>We share knowledge with the world</h1>
                </div>
                <img src="https://about.udemy.com/wp-content/uploads/2021/07/about-us.png" alt="" />
            </div>
            <div className="text-center my-5">
                <h1>Changing learning for the better</h1>
                <p>Whether you want to learn or to share what you know,<br /> you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
            </div>
            <div className="d-flex gap-5 my-5">
                <div className="bg-secondary p-3 text-white">
                    <h2>Work with us</h2>
                    <h5>At Udemy, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</h5>
                </div>
                <div className="bg-warning p-3">
                    <h2>See our research</h2>
                    <h5>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</h5>
                </div>
                <div className="bg-info p-3">
                    <h2>Read our blog</h2>
                    <h5>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</h5>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;