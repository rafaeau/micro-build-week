import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsList from './components/NewsList'
import MyAbout from './components/MyAbout'
import { Button } from 'react-bootstrap'

export default class MainPosts extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="mt-5">

                    <Col md={8}>
                        <div className="container">
                            <h1 className="about-sec">From the Firehose</h1>
                            <hr></hr>
                        </div>
                        <NewsList />

                        <div className="container mb-5">
                            <Button variant="outline-primary py-2 px-3 mr-3" style={{ borderRadius: "40px" }}>Older</Button>
                            <Button variant="outline-secondary py-2 px-3" disabled style={{ borderRadius: "40px" }}>Newer</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <MyAbout />
                    </Col>

                </Row>
            </Container>
        )
    }
}
