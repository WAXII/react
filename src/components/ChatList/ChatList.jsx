import { Component } from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { TextField, Icon, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { addChat } from '../../redux/actions/messageActions';

import './ChatList.css';

class _ChatList extends Component {
    state = {
        chatName: '',
    };

    addChat = () => {
        this.props.addChat(this.state.chatName);
        this.setState({
            chatName: '',
        });
    };

    render() {
        const { chats = []} = this.props;
        return (
            <div className='chat-list'>
                <List>
                    {chats.map((chat, index) => (
                        <Link key={index} to={`/chat/${index}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <Send />
                                </ListItemIcon>
                                <ListItemText primary={chat} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <div className='new-chat'>
                    <TextField
                        value={this.state.chatName}
                        label='New chat'
                        onChange={(event) =>
                            this.setState({
                                chatName: event.target.value,
                            })
                        }
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                this.addChat();
                            }
                        }}
                    />
                    <IconButton
                        color='primary'
                        variant='contained'
                        onClick={this.addChat}
                    >
                        <Icon>send</Icon>
                    </IconButton>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    chats: state.chat.chats,
});

const ChatList = compose(
    connect(mapStateToProps, { addChat })
)(_ChatList);

export { ChatList };
