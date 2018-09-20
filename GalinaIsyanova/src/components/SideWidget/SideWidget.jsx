import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

export default class SideWidget extends Component {
    render() {
        const { widgetContent } = this.props;

        return (
            <div>
                <Card className="my-4">
                    <CardHeader tag="h5">Side Widget</CardHeader>
                    <CardBody>{widgetContent}</CardBody>
                </Card>
            </div>
        );
    }
}