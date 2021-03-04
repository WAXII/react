import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const ChatListItem = (props) => {
    const {current = 0,name="",selected=0, changer} = props;
    var cN = "primary";
    if (current == selected) {
        cN = "secondary";
    };
    const linkName = "/chat"+(current+1)+"";
    return (
        <Link to={linkName}>
        <Button href={linkName} color={cN} onClick={() => changer(current)}>{name}</Button>
        </Link>
    );
    
};

export {ChatListItem};