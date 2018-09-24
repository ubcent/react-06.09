import React from 'react';
import { Button, Form, FormGroup, Card, Input, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default function CommentsSend(props) {
    const { onButtonClick } = props;

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

CommentsSend.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
};