import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import IndexProductCategrory from './ProductCategrorys/Index';
export default class Admin extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="main-container container-fluid">
                        <div className="page-container">
                            <div className="page-sidebar" id="sidebar">
                                <ul className="nav sidebar-menu">
                                    <Menu />
                                </ul>
                            </div>
                            <div className="page-content">
                                <div className="page-body">
                                    <Switch>
                                        <Router path="/quan-ly-san-pham">
                                        </Router>
                                        <Route path="/quan-ly-san-pham-loai-san-pham">
                                            <IndexProductCategrory />
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}