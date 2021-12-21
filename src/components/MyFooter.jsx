import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
    return (
        <div className="px-5 py-4" style={{
            backgroundColor: "rgb(218, 218, 218)",
        }}>
            <Col className="text-muted">
                <Row style={{
                    textAlign: "center",
                    justifyContent: "center"
                }}>
                    <p style={{
                        textAlign: "center"
                    }}>Blog template built for <a href="#" style={{ color: "blue", }}>Strive School</a>  by
                        <a style={{ color: "blue", }}>Team 0</a></p>

                </Row>
                <Row style={{
                    textAlign: "center",
                    justifyContent: "center"
                }}>
                    <p><a href="#">Back to top</a></p>
                </Row>
            </Col>
        </div>
    );
};

export default MyFooter;
