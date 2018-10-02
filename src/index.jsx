import React, { Component, PureComponent } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'components/Header';
import Menu from 'components/Menu';
import Counter from 'components/Counter';
import CommentsForm from 'components/CommentsForm';
import CommentsListContainer from 'containers/CommentsListContainer';

import routes from './routes';
import store from './store';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Ivan Sidorov'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: true,
    }
  }

  handleClick() {
    console.log('button clicked');
  }

  handleSend = (comment) => {
    const { isShown } = this.state;
    this.setState({ isShown: !isShown })
  };

  render() {
    const { isShown } = this.state;
    return (
      <div>
        <Header onButtonClick={this.handleClick} size="small" creators={creators}>
          <div>
            Hello I'm children of Header!
          </div>
          <Menu items={[
            { href: '/', title: 'Home' },
            { href: '/comments', title: 'Comment' },
          ]} />
        </Header>
        <Switch>
          {routes.map((route, idx) => <Route key={idx} {...route} />)}
        </Switch>
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, 
  document.getElementById('root')
);
