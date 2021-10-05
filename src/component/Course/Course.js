import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    // Destructuring
    const {img, name, by, price} = props.service;
    return (
        <div>
            <Col className="shadow-lg">
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <div>
                            <p>{by}</p>
                            <h4>${price}</h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;