import './SearchForm.css';
import React, { Component } from 'react';
import { Button, InputGroup, Card, Input, CardHeader, CardBody, InputGroupAddon } from 'reactstrap';

export default class SearchForm extends Component {
    render() {
        return (
            <div>
                <Card className="my-4">
                    <CardHeader tag="h5">Search</CardHeader>
                    <CardBody>
                        <InputGroup>
                            <Input placeholder="Search for..." />
                            <InputGroupAddon addonType="prepend">
                                <Button className="search_form__button">Go!</Button>
                            </InputGroupAddon>    
                        </InputGroup>
                    </CardBody>
                </Card>
            </div>
        );
    }
}