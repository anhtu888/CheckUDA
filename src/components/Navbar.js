import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <header>
                {/* header inner */}
                <div className="header-top">
                    <div className="header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="index.html"><img src="image/images/logo3.png" alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu ">
                                                <ul className="menu-area-main">
                                                    <li className="active"> <a href="index.html">Trang Chủ</a> </li>
                                                    <li> <a href="#about">Giới Thiệu</a> </li>
                                                    <li> <a href="sanpham.html">Sản Phẩm</a> </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu ">
                                                <ul className="menu-area-main">
                                                    <li> <a href="login.html">Đăng Nhập</a> </li>
                                                    <li> <a href="register.html">Đăng Ký</a> </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end header inner */}
                {/* end header */}

            </header>

        );
    }
}

export default Navbar;