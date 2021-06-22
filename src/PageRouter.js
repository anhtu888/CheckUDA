import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admin from './components/Admin/Admin';
import App1 from './components/App1';
import Product from './components/Web/Product'
import Product1 from './components/Web/Product1'
import Product2 from './components/Web/Product2'
import Product3 from './components/Web/Product3'
import Product4 from './components/Web/Product4'
import Product5 from './components/Web/Product5'
import News from './components/Web/News'
import About from './components/Web/About'
import Advisory from './components/Web/Advisory'
import Sevice from './components/Web/Sevice'
import Contact from './components/Web/Contact'
import Qrma from './components/Web/Qrma'
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
                    <Route path="/product">
                        <Product />

                    </Route>
                    <Route path="/product1">
                        <Product1 />

                    </Route>
                    <Route path="/product2">
                        <Product2 />

                    </Route>
                    <Route path="/product3">
                        <Product3 />

                    </Route>
                    <Route path="/product4">
                        <Product4 />

                    </Route>
                    <Route path="/product5">
                        <Product5 />

                    </Route>
                    <Route path="/new">
                        <News />

                    </Route>
                    <Route path="/dichvu">
                        <Sevice />

                    </Route>
                    <Route path="/about">
                        <About />

                    </Route>
                    <Route path="/tuvan">
                        <Advisory />

                    </Route>
                    <Route path="/lienhe">
                        <Contact />

                    </Route>
                    <Route path="/qrcode">
                        <Qrma />

                    </Route>

                </Switch>
            </Router>
        );
    }
}