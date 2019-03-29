import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginComponent from "./components/LoginComponent/LoginComponent";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import NotFound from "./components/NotFound";
import ProductListComponent from "./components/ProductListComponent";
import CartComponent from "./components/CartComponent";

const routing = (
    <Router>
        <header>
            <ul className="menu">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                <li><NavLink to="/products" activeClassName="active">products</NavLink></li>
                <li><NavLink to="/cart" activeClassName="active">cart</NavLink></li>
            </ul>
        </header>
        <div>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/cart" component={CartComponent}/>
                <Route path="/products" exact component={ProductListComponent}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));
