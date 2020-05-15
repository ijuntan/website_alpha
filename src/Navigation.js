import React, {Component} from 'react';
import { Switch, withRouter, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeScreen from './Components/HomeScreen';
import MmorpgScreen from './Components/MmorpgScreen';
import VoteScreen from './Components/VoteScreen';
import SurvivalScreen from './Components/SurvivalScreen'

const history = createBrowserHistory();

class Navigation extends Component{
    render(){
        return(
            <Switch history={history}>
                <Route exact path='/' component={HomeScreen}/>
                <Route path='/home' component={HomeScreen}/>
                <Route path='/mmorpg' component={MmorpgScreen}/>
                <Route path='/vote' component={VoteScreen}/>
                <Route path='/survival' component={SurvivalScreen}/>
            </Switch>
        )
    }
}

export default withRouter(props => <Navigation {...props}/>);