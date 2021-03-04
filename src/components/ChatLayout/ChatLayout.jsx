import React from "react";
import { Messages } from "../Messages";
import { Form } from "../Form";
import {
  Chip,
  Paper,
} from "@material-ui/core";

class ChatLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper className="chat-box">
        <Messages list={this.props.messages} className="messages-list" />
        <div className="ready-msgs box">
          {this.props.dialog.map((item, idx) => (
            <Chip
              label={item.question}
              onClick={() => this.props.handleBtnClick(idx)}
            ></Chip>
          ))}
          <Chip
            label="Are you crazy machine?"
            onClick={() => this.props.handleBtnClick(4)}
          ></Chip>
        </div>
        <Form addMsgFunc={this.props.publishMessage} />
      </Paper>
    );
  }
}

export { ChatLayout };
