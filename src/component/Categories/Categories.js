import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useCategories from '../../hooks/useCategories';
import './Categories.css';

const Categories = () => {
    // Use Custom Hooks
    const [categories] = useCategories();
    return (
        <div className="container mt-5">
            <h1 className="text-center">Top <span className="text-color">Categories</span></h1>
            <div className="container">
                <Row xs={1} md={3} className="g-5 mb-5 p-4">
                    {
                        categories.map(category =>
                            <div key={category.id}>
                                <Col className="shadow-lg">
                                    <Card className="img-overflow">
                                        <Card.Img className="img-hover" variant="top" src={category.img} />
                                        <Card.Body>
                                            <Card.Title>{category.title}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default Categories;