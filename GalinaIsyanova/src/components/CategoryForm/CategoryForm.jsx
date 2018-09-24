import React from 'react';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default function CategoryForm(props) {
    const { leftContent, rightContent } = props;

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

CategoryForm.propTypes = {
    leftContent: PropTypes.arrayOf(PropTypes.string),
    rightContent: PropTypes.arrayOf(PropTypes.string),
};
CategoryForm.defaultProps = {
    leftContent: [],
    rightContent: [],
};