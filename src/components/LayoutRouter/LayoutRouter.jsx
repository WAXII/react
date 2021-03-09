import {Switch,Route} from 'react-router-dom';
import {ChatLayout} from '../ChatLayout';
import {ProfileLayout} from '../ProfileLayout';
const LayoutRouter = (props) => {
    return (
        <Switch>
            <Route path="/profile" component={ProfileLayout}/>
            <Route>
                <ChatLayout messages={props.messages} publishMessage={props.publishMessage} handleBtnClick={props.handleBtnClick} dialog={props.dialog}/>
            </Route>
        </Switch>
    );
    
};

export {LayoutRouter};