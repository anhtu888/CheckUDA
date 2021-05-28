import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <header>
                {/* header inner */}
                <div className="header-top">
                    <div className="header" style={{ background: 'none' }}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="/"><img src="image/images/logo3.png" style={{ maxWidth: '90%' }} alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-9">
                                    <div className="menu-area">
                                        <div className="limit-box">
                                            <nav className="main-menu ">
                                                <ul className="menu-area-main">
                                                    <li > <a href="/">Trang Chủ</a> </li>
                                                    <li> <a href="/about">Giới Thiệu</a> </li>
                                                    <li> <a href="/products">Sản Phẩm</a> </li>
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

export default Menu;