import React, { Component, PureComponent } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';
import CommentsForm from 'components/CommentsForm';
import CommentsListContainer from 'containers/CommentsListContainer';

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
        </Header>
        Hello world
        <Counter />
        <CommentsListContainer />
        <CommentsForm onSend={this.handleSend} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
