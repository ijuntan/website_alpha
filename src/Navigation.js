import React, {Component} from 'react';
import { Switch, withRouter, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeScreen from './Components/HomeScreen';
import CustomMobs from './Components/CustomMobs';

const history = createBrowserHistory();

class Navigation extends Component{
    render(){
        return(
            <Switch history={history}>
                <Route exact path='/' component={HomeScreen}/>
                <Route path='/home' component={HomeScreen}/>
                <Route path='/custom-mobs' component={CustomMobs}/>
            </Switch>
        )
    }
}

export default withRouter(props => <Navigation {...props}/>);