import React from "react";
import { Messages } from "../Messages";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { LayoutRouter } from "../LayoutRouter"
import { withRouter } from 'react-router-dom';
import {
  Chip,
  Paper,
  Grid,
  Button,
  Menu,
  MenuItem,
  Container,
} from "@material-ui/core";
import "./App.css";

class _App extends React.Component {
  constructor(props) {
    super(props);
    var urlChatId = Number.parseInt(props.match.params.chatId)
    if (urlChatId === NaN || urlChatId-1 < 0) {
      urlChatId = 0;
    } else {
      urlChatId = urlChatId-1;
    }
    this.state = {
      isLastMsgFromBot: true,
      lastUserMsgIdx: 0,
      chats: ["Chat 1", "Chat 2", "Chat 3"],
      selectedChat: urlChatId,
      messages: [
        [
          {
            source: "Bot",
            msg: "Hello! I am robot.",
          },
        ],
        [
          {
            source: "Bot",
            msg: "Hello! I am robot.",
          },
        ],
        [
          {
            source: "Bot",
            msg: "Hello! I am robot.",
          },
        ],
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
    this.publishMessage = this.publishMessage.bind(this);
    this.changeChat = this.changeChat.bind(this);
  }

  componentDidUpdate() {
    if (!this.state.isLastMsgFromBot) {
      setTimeout(() => {
        this.publishBotAnswer(this.state.lastUserMsgIdx);
      }, 100);
    }
  }

  publishUserMessage(idx) {
    var msgs = this.state.messages;
    msgs[this.state.selectedChat] = [
      ...msgs[this.state.selectedChat],
      {
        source: "Me",
        msg: this.state.dialog[idx].question,
      },
    ];
    this.setState({
      messages: msgs,
      isLastMsgFromBot: false,
      lastUserMsgIdx: idx,
    });
  }

  publishBotAnswer(idx) {
    var msgs = this.state.messages;
    msgs[this.state.selectedChat] = [
      ...msgs[this.state.selectedChat],
      {
        source: "Bot",
        msg: this.state.dialog[idx].answer,
      },
    ];
    this.setState({
      messages: msgs,
      isLastMsgFromBot: true,
    });
  }

  handleBtnClick(idx) {
    if (idx >= 0 && idx < this.state.dialog.length) {
      this.publishUserMessage(idx);
    } else {
      var msgs = this.state.messages;
      msgs[this.state.selectedChat] = [
        ...msgs[this.state.selectedChat],
        {
          source: "Bot",
          msg: "Hm... I do not know what to answer to you...",
        },
      ];
      this.setState({
        messages: msgs,
        isLastMsgFromBot: true,
      });
    }
  }

  publishMessage(message) {
    var msgs = this.state.messages;
    msgs[this.state.selectedChat] = [
      ...msgs[this.state.selectedChat],
      {
        source: "Me",
        msg: message,
      },
    ];
    this.setState({
      messages: msgs,
      isLastMsgFromBot: true,
    });
  }

  changeChat(idx) {
    this.setState({
      selectedChat: idx,
    });
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ChatList
              chats={this.state.chats}
              selectedChat={this.state.selectedChat}
              changeChat={this.changeChat}
            />
          </Grid>
          <Grid item xs={9}>
            <LayoutRouter messages={this.state.messages[this.state.selectedChat]} publishMessage={this.publishMessage} handleBtnClick={this.handleBtnClick} dialog={this.state.dialog}/>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

const App = withRouter(_App);

export { App };
