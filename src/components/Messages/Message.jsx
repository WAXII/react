import React from 'react';

const Message = (props) => {
    const {source,text} = props;
    return <div className='message'><b>{source}: </b>{text}</div>
};

export {Message};