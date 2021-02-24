import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='message'><b>{this.props.source}: </b>{this.props.text}</div>
    }
}

export {Message};