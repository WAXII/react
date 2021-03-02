import React from 'react';
import {Message} from './';

const Messages = (props) => {
    const {list = []} = props;

    return <div className='messages'>
    {list.map((item,idx) => (
        <Message source={item.source} text={item.msg} key={idx} />
    ))}
</div>
};

export {Messages};
