import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Index extends React.Component {
    render() {
        return (
            <div>
                <div id="pre-loader">
                    <div className="loader-holder">
                        <div className="frame">
                            <img src="asset/web/images/logo3.png" alt="Laboom" />
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    {/* Start Header */}
                    <header>
                        <div className="header-part header-reduce sticky">
                            <div className="header-top">
                                <div className="container">
                                    <div className="header-top-inner">
                                        <div className="header-top-left">
                                            <a href="#" className="top-cell"><img src="asset/web/images/fon.png" alt="" />
                                                <span>012-213-365</span></a>
                                            <a href="#" className="top-email"><span>donga@uda.edu</span></a>
                                        </div>
                                        <div className="header-top-right">
                                            <div className="social-top">
                                                {/* <ul>
                                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                                    <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                                    <li><a href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
                                                </ul> */}
                                            </div>
                                            <div className="language-menu">
                                                <a href="#" className="current-lang">Việt Nam <i className="fa fa-caret-down" aria-hidden="true" /></a>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Turkish</a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Nederlands</a></li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Français</a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Deutsch</a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Italiano</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-bottom">
                                <div className="container">
                                    <div className="menu-main ">
                                        <ul>
                                            <li className="has-child">
                                                <a href="index.html">Trang Chủ</a>
                                            </li>
                                            <li className="mega-menu">
                                                <a href="#">Giới Thiệu</a>
                                            </li>
                                            <li className="has-child">
                                                <a href="shop.html">Sản Phẩm</a>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="menu-main right" style={{ float: 'right', width: 'auto' }}>
                                        <ul>
                                            <li className="has-child">
                                                <a href="index.html">Thêm Sản Phẩm</a>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="logo">
                                        <a href="index.html"><img src="asset/web/images/logo.png" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div></div>

        )
    }
}
export default Index;