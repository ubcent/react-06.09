import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';
import CommentsForm from 'components/CommentsForm';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Ivan Sidorov'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }

  handleClick() {
    console.log('button clicked');
  }

  handleSend = (comment) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        comments: prevState.comments.concat([comment]),
      }
    })
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <Header onButtonClick={this.handleClick} size="small" creators={creators}>
          <div>
            Hello I'm children of Header!
          </div>
        </Header>
        Hello world
        <Counter />
        <ul>
          {comments.map((comment, idx) => <li key={idx}>{comment.username}: {comment.message}</li>)}
        </ul>
        <CommentsForm onSend={this.handleSend} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
