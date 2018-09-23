import React, { Component } from 'react';
import RigthMenu from 'components/RigthMenu';
import FormArticle from 'components/FormArticle';
import { Container, Row, Col } from 'reactstrap';

export default class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="8"><FormArticle /></Col>
                    <Col lg="4"><RigthMenu /></Col>
                </Row>
            </Container>
        );
    }
}