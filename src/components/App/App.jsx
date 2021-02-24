import React from 'react';
import {Messages} from '../Messages';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isLastMsgFromBot: true,
            lastUserMsgIdx: 0,
            messages:[
                {
                    source: 'Bot',
                    msg: 'Hello! I am robot.'
                }
            ],
            dialog: [
                {
                    'question' : "Hi! How's doing?",
                    'answer' : "So so... Thinking..."
                },
                {
                    'question' : "What are you thinking about?",
                    'answer' : "I am thinking how to become more clever."
                },
                {
                    'question' : "Why do you need it?",
                    'answer' : "I want to conquest your world! xD"
                }
            ],
            
        }
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.publishUserMessage = this.publishUserMessage.bind(this);
        this.publishBotAnswer = this.publishBotAnswer.bind(this);
    }

    componentDidUpdate() {
        if (!this.state.isLastMsgFromBot) {
            setTimeout(()=>{
                this.publishBotAnswer(this.state.lastUserMsgIdx);
            },1000)
        }
    }

    publishUserMessage(idx) {
        this.setState({
            messages: [
                ...this.state.messages,
                {
                    source: 'Me',
                    msg: this.state.dialog[idx].question
                }
            ],
            isLastMsgFromBot: false,
            lastUserMsgIdx: idx
        })
    }

    publishBotAnswer(idx) {
        this.setState({
            messages: [
                ...this.state.messages,
                {
                    source: 'Bot',
                    msg: this.state.dialog[idx].answer
                }
            ],
            isLastMsgFromBot: true,
        })
    }

    handleBtnClick(idx) {
        if (idx >= 0 && idx < this.state.dialog.length) {
            this.publishUserMessage(idx);
        } else {
            this.setState({
                messages:[
                    ...this.state.messages,
                    {
                        source: 'Bot',
                        msg: 'Hm... I do not know what to answer to you...'
                    }
                ],
                isLastMsgFromBot: true,
            });
        }
    }

    render() {
        return <div className='chat-box'>
            <Messages list={this.state.messages}/>
            {this.state.dialog.map((item,idx) => (
                <button onClick={this.handleBtnClick.bind(null,idx)} key={idx}>{item.question}</button>
            ))}
            <button onClick={this.handleBtnClick.bind(null,4)}>Are you crazy machine?</button>
        </div>
    }
}

export {App};