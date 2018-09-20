import React, { Component } from 'react';
import { Button, Form, FormGroup, Card, Input, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default class CommentsSend extends Component {
    static propTypes = {
        onButtonClick: PropTypes.func.isRequired,
    };

    render() {
        const { onButtonClick } = this.props;
        return (
            <div>
                <Card className="my-4">
                    <CardHeader tag="h5">Leave a Comment:</CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Input type="textarea" name="text" id="commentText" rows="3" />
                            </FormGroup>
                            <Button color="primary" onClick={onButtonClick}>Submit</Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}