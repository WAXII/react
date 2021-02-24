import React from 'react';
import {Message} from './';

class Messages extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {list = []} = this.props;
        return <div className='messages'>
            {list.map((item,idx) => (
                <Message source={item.source} text={item.msg} key={idx} />
            ))}
        </div>
    }
}

export {Messages};
