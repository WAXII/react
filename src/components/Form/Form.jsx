import React from "react";
import {Button,TextField} from "@material-ui/core"
import './Form.css'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }



  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  handleClick() {
    console.log('sending');
    this.setState({ message: '' });
  }

  render() {
    return (
      <div className='submit-form'>
        <TextField id="standard-basic" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.message}/>
        <Button variant="contained" color="primary" onClick={this.handleClick}>Send message</Button>
      </div>
    );
  }
}

export { Form };
