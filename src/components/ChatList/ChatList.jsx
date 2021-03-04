import React from "react";
import { Paper, Button, Divider } from "@material-ui/core";
import { ChatListItem } from "./ChatListItem";
import {Link} from 'react-router-dom';

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChat: "",
    };
  }

  render() {
    
    return (
        <Paper className="chat-list">
        <Link to='/profile'>
        <Button href='/profile'>My profile</Button>
        </Link>
            <Divider variant="middle" />
            {this.props.chats.map((item, idx) => (
                <ChatListItem key={idx} current={idx} name={item} selected={this.props.selectedChat} changer={this.props.changeChat} />
            ))}
        </Paper>
    );
  }
}

export { ChatList };
