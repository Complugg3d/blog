import React from 'react';
import './form.scss';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.post ? props.post.title : '',
      body: props.post ? props.post.body : '',
      error: '',
    };
  }
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.body) {
      //error
      this.setState(() => ({ error: 'Please fill the title & body' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        body: this.state.body,
      });
    }
  }
  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }))
  }
  onBodyChange = e =>{
    const body = e.target.value;
    this.setState(() => ({ body }))
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {!!this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          value={this.state.body}
          className="textarea"
          placeholder="Add a body for your expense (optional)"
          onChange={this.onBodyChange}
        >
        </textarea>
        <div>
          <button className="btn-layout">{this.props.post ? 'Save changes' : 'Add Post'}</button>
        </div>
      </form>
    );
  }
}