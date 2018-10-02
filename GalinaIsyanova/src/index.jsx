import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container, Row, Col } from 'reactstrap';
import RigthMenu from 'components/RigthMenu';
import routes from './routes.js';
import ModalWelcome from 'components/ModalWelcome';

function App() {
    const myFooterContent = 'Copyright © Your Website 2018';
    const myMenu = [{
        text: 'Home',
        src: '/',
    }, {
        text: 'Blog',
        src: '/blog',
    }, {
        text: 'Comments',
        src: '/comments',
    }, {
        text: 'Users',
        src: '/users',
    }];
    const myBrand = {
        text: 'My blog',
        src: '/'
    };

    const contentSideWidget = 'You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!';
    const leftContentCategoryForm = ['Web Design', 'HTML', 'Freebies'];
    const rightContentCategoryForm = ['JavaScript', 'CSS', 'Tutorials'];

    return (
        <div>
            <Header menu={myMenu} brand={myBrand} />
            <Container>
                <Row>
                    <Col lg="8">
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                    </Col>
                    <Col lg="4"><RigthMenu leftContentCategoryForm={leftContentCategoryForm} rightContentCategoryForm={rightContentCategoryForm} contentSideWidget={contentSideWidget} /></Col>
                </Row>
            </Container>
            <Footer footerContent={myFooterContent} />
            <Switch>
                <Route path='/' component={ModalWelcome} exact/>
            </Switch>
        </div>
    );
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);