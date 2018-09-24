import React from 'react';
import { Button, InputGroup, Card, Input, CardHeader, CardBody, InputGroupAddon } from 'reactstrap';

export default function SearchForm() {
    return (
        <div>
            <Card className="my-4">
                <CardHeader tag="h5">Search</CardHeader>
                <CardBody>
                    <InputGroup>
                        <Input placeholder="Search for..." />
                        <InputGroupAddon addonType="append">
                            <Button className="search_form__button">Go!</Button>
                        </InputGroupAddon>    
                    </InputGroup>
                </CardBody>
            </Card>
        </div>
    );
}