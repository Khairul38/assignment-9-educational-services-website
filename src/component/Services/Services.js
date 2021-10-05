import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    // Use Custom Hooks
    const [services] = useServices()
    return (
        <div className="container">
            <div className="mt-5 text-center">
                <h1><span className="text-color">Most</span> Popular Services</h1>
            </div>
            <div className="container my-5">
                <Row xs={1} md={3} className="g-5 p-4">
                    {
                        services.map(service => <Course key={service.id} service={service}></Course>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;