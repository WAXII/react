import {Message} from './';

const Messages = (props) => {
    const {list = []} = props;

    return <div className='messages'>
        {list.map((item,idx) => (
            <Message text={item} key={idx} />
        ))}
    </div>
};

export {Messages};
