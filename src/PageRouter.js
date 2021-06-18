import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from './components/Admin/Admin';
import App1 from './components/App1';
export default class PageRouter extends React.Component {
    render() {
        return (
            <Router>
                <div hidden>
                    <Link to="/">Home</Link>
                    <Link to="/admin">AdminPage</Link>
                </div>
                <Switch>
                    <Route exact path="/">
                        <App1 />
                    </Route>
                    <Route path="/admin">
                        <Admin />
                    </Route>
                </Switch>
            </Router>
        );
    }
}