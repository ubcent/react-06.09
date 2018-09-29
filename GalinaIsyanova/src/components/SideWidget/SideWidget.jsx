import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

export default function SideWidget(props) {
    const { widgetContent } = props;

    return (
        <div>
            <Card className="my-4">
                <CardHeader tag="h5">Side Widget</CardHeader>
                <CardBody>{widgetContent}</CardBody>
            </Card>
        </div>
    );
}

SideWidget.propTypes = {
    widgetContent: PropTypes.string,
};

SideWidget.defaultProps = {
    widgetContent: '',
}