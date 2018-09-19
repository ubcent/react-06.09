import './Body.css';
import React, {Component} from 'react';
import Sider from "./Sider";
import {Jumbotron, Container, Button} from 'reactstrap';

export default class Body extends Component {
    render() {
        return (
            <section className='body'>
                <Sider/>
                <article className="content">
                    <h1>Основной контент:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet atque deserunt dolor eos
                        facilis, inventore iusto nemo odio optio perferendis placeat quae rem saepe similique temporibus
                        tenetur. Doloremque esse maxime natus pariatur quia sunt. Commodi cum cumque deleniti deserunt
                        distinctio dolorum, ducimus eos error et fuga hic ipsa, laborum libero neque odit placeat quod
                        quos reiciendis rerum tempore, totam vel vero voluptas. Ducimus ea impedit inventore maiores
                        nemo, provident quam repellendus sapiente? Alias deserunt eum explicabo id iure laborum magnam
                        nam quis sapiente veritatis? Accusantium alias dolor earum ipsum libero maxime, minima, neque
                        quis quod rem sit tempora voluptate.</p>
                    <div>
                        <Jumbotron fluid>
                            <Container fluid>
                                <h1 className="display-3">Fluid jumbotron</h1>
                                <p className="lead">This is a modified jumbotron that occupies the entire horizontal
                                    space of its parent.</p>
                            </Container>
                        </Jumbotron>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto at culpa
                            distinctio dolore dolorem dolores eos, facere facilis fugiat illo impedit in laboriosam
                            magnam mollitia natus nihil placeat, praesentium quam, quibusdam ratione temporibus tenetur
                            unde vel veritatis voluptas voluptatibus voluptatum? Asperiores, autem cupiditate dolores
                            earum enim expedita ipsa iste, molestiae nemo quae quibusdam quisquam quos sapiente
                            similique veniam? Beatae, dolores error eveniet expedita facere id in ipsum itaque laborum
                            nam nihil placeat qui sit velit voluptatem. Accusantium error et fuga impedit laborum magnam
                            recusandae rerum suscipit temporibus unde! Accusantium debitis earum fugiat itaque magnam
                            magni perspiciatis ratione. Consectetur, facere.</p>
                    </div>
                    <div>
                        <Jumbotron>
                            <h1 className="display-3">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for
                                calling extra attention to featured content or information.</p>
                            <hr className="my-2"/>
                            <p>It uses utility classes for typography and spacing to space content out within the larger
                                container.</p>
                            <p className="lead">
                                <Button color="primary">Learn More</Button>
                            </p>
                        </Jumbotron>
                    </div>
                </article>
            </section>
        );
    }
}