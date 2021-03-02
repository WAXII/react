import React from "react";
import { Messages } from "../Messages";
import { Form } from "../Form";
import { Chip, Paper, Grid, Button, Menu, MenuItem } from "@material-ui/core";
import "./App.css";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLastMsgFromBot: true,
      lastUserMsgIdx: 0,
      messages: [
        {
          source: "Bot",
          msg: "Hello! I am robot.",
        },
      ],
      dialog: [
        {
          question: "Hi! How's doing?",
          answer: "So so... Thinking...",
        },
        {
          question: "What are you thinking about?",
          answer: "I am thinking how to become more clever.",
        },
        {
          question: "Why do you need it?",
          answer: "I want to conquest your world! xD",
        },
      ],
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.publishUserMessage = this.publishUserMessage.bind(this);
    this.publishBotAnswer = this.publishBotAnswer.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.isLastMsgFromBot) {
      setTimeout(() => {
        this.publishBotAnswer(this.state.lastUserMsgIdx);
      }, 100);
    }
  }

  publishUserMessage(idx) {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          source: "Me",
          msg: this.state.dialog[idx].question,
        },
      ],
      isLastMsgFromBot: false,
      lastUserMsgIdx: idx,
    });
  }

  publishBotAnswer(idx) {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          source: "Bot",
          msg: this.state.dialog[idx].answer,
        },
      ],
      isLastMsgFromBot: true,
    });
  }

  handleBtnClick(idx) {
    if (idx >= 0 && idx < this.state.dialog.length) {
      this.publishUserMessage(idx);
    } else {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            source: "Bot",
            msg: "Hm... I do not know what to answer to you...",
          },
        ],
        isLastMsgFromBot: true,
      });
    }
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3} className="chat-list">

        </Grid>
        <Grid item xs={12}>
          <Paper className="chat-box">
            <Messages list={this.state.messages} />
            <div className="ready-msgs box">
              {this.state.dialog.map((item, idx) => (
                <Chip
                  label={item.question}
                  onClick={() => this.handleBtnClick(idx)}
                ></Chip>
              ))}
              <Chip
                label="Are you crazy machine?"
                onClick={() => this.handleBtnClick(4)}
              ></Chip>
            </div>
            <Form />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export { App };
