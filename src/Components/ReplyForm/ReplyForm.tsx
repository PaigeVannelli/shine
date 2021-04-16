import React, { Component } from 'react';
import './ReplyForm.scss';

interface IProps {
  addReply: (newPost: string) => void;
}

interface IReply {
  reply: string;
  disabled: boolean;
}

class ReplyForm extends Component<IProps, IReply> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      reply: '',
      disabled: true,
    }
  }

  handleChange = (event: { target: { reply: string; value: string; }; }) => {
    this.setState(prevState => ({
      ...prevState,
      reply: event.target.value
    }))
  }

  deactivateReactivate = () => {
    if (this.state.reply !== '') {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  submitReply = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    this.props.addReply(this.state.reply);
    this.clearInput();
  }

  clearInput = () => {
    this.setState({ reply: '' });
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Add a comment'
          // name = 'title'
          value={this.state.reply}
          onChange={event => this.handleChange(event)}
          onKeyUp={this.deactivateReactivate}
        />
        <button className='share' > Share
        </button>
      </form>
    )
  }
}

export default ReplyForm;