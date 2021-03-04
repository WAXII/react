import {Switch,Route,Redirect} from 'react-router-dom';

import {NotFound} from '../NotFound';
import {App} from '../App';
const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/profile" />
            </Route>
            <Route path="/chat:chatId" component={App}/>
            <Route path="/profile" component={App}/>
            <Route component={NotFound} />
        </Switch>
    );
    
};

export {Router};