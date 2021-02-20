import {Messages, Message} from '../Messages';

const App = () => {
    return <div id='test-id'>
        <span>Static text</span>
        <Message text='Single text from Message component' />
        <Messages list={['First collection text','Second collection text','Third collection text']}/>
    </div>
};

export {App};