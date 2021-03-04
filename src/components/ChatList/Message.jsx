import React from 'react';
import {Divider,ListItem,ListItemText} from '@material-ui/core';

const Message = (props) => {
    const {source,text} = props;
    return <>
        <ListItem>
            <ListItemText primary={source} secondary={text} />
        </ListItem>
        <Divider variant="middle" />
    </>
    
};

export {Message};