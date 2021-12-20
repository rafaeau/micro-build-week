import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyPosts from './components/MyPosts'
import MyAbout from './components/MyAbout'


export default class MainPosts extends Component {
    render() {
        return (
            <Container fluid>
                <Row>

                    <Col md={8}>
                        <MyPosts />
                    </Col>
                    <Col md={4}>
                        <MyAbout />
                    </Col>

                </Row>
            </Container>
        )
    }
}
