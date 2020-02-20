import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import newCustomer from './pages/newCustomer';

const Rota = (
    <Router>
        <div>
            <Switch>
                <Route path='/newcustomer' component={newCustomer}/>  
                <Route path='/' component={App}/>  
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rota, document.getElementById('root'));

serviceWorker.unregister();