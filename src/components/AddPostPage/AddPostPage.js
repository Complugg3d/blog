import React from 'react';
import PostForm from '../PostForm/PostForm';

export default class AddPostPage extends React.Component {
  onSubmit = (post) => {
    this.props.startAddPost(post).then(() => {
      this.props.history.push('/');
    });    
  }
  render() {
    return (
      <div className="content-container top-spacing">
        <PostForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}