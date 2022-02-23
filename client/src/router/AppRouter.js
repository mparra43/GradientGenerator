import React , {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import {getHistoryTemplates} from '../actions/colors';
import { Home } from '../components/pages/index';

export const AppRouter = () => {
    const dispatch = useDispatch();

   useEffect(() => {
    
       dispatch(getHistoryTemplates());
   }, [dispatch])
    
    return (
        <Router>
            <div>
                <Switch>
            
                    <Route exact path="/" component={ Home } />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
