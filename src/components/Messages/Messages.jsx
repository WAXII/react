import React from 'react';
import {Message} from './';
import {List} from '@material-ui/core';

const Messages = (props) => {
    const {list = []} = props;
    return <List>
        {list.map((item,idx) => (
            <Message source={item.source} text={item.msg} key={idx} />
        ))}
    </List>
};

export {Messages};
