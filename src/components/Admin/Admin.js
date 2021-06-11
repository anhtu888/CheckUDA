// import './App.css';
import React from 'react';  
// import './Admin.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import HomeAdmin from './HomeAdmin';
import IndexProductCategrory from './ProductCategrory/Index';
export default class Admin extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                    <Header />
                    <HomeAdmin />
                    <div className="content-wrapper">
                        <section className="content">
                            <Switch>
                                <Route path="/home-admin">
                                </Route>
                                {/* <Route path="/quan-ly-website-phan-hoi-khach-hang">
                                    <IndexContact />
                                </Route> */}
                                {/* <Route path="/quan-ly-website-dia-chi-lien-he">
                                    <AddressContact />
                                </Route> */}
                                <Route path="/quan-ly-san-pham-loai-san-pham">
                                    <IndexProductCategrory />
                                </Route>
                                {/* <Route path="/quan-ly-san-pham">
                                    <IndexProduct />
                                </Route> */}
                                {/* <Route path="/quan-ly-tin-tuc">
                                    <IndexNew />
                                </Route> */}
                                {/* <Route path="/tai-khoang-khach-hang">
                                    <IndexCustomer />
                                </Route> */}
                                {/* <Route path="/gioi-thieu">
                                    <Abouts />
                                </Route> */}
                                {/* <Route path="/tai-khoang-quan-tri">
                                    <IndexAdminUser />
                                </Route> */}
                            </Switch>
                        </section>
                    </div>
                    <Menu />
                </div>
            </Router>
        );
    }
}