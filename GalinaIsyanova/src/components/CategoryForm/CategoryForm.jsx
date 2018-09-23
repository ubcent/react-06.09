import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default class CategoryForm extends Component {
    static propTypes = {
        leftContent: PropTypes.arrayOf(PropTypes.string),
        rightContent: PropTypes.arrayOf(PropTypes.string),
    };
    static defaultProps = {
        leftContent: [],
        rightContent: [],
    };

    render() {
        const { leftContent, rightContent } = this.props;

        return (
            <div>
                <Card className="my-4">
                    <CardHeader tag="h5">Categories</CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm="6">
                                <ul className="list-unstyled mb-0">
                                    {leftContent.map((element, idx) => <li key={idx}><a href="#">{element}</a></li>)}
                                </ul>
                            </Col>
                            <Col sm="6">
                                <ul className="list-unstyled mb-0">
                                    {rightContent.map((element, idx) => <li key={idx}><a href="#">{element}</a></li>)}
                                </ul>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}