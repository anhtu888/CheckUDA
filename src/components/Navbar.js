import React, { Component } from 'react';
import Menu from './TrangChu/Menu';
import Slide from './TrangChu/Slide';

class Navbar extends Component {

    render() {
        return (
            <div>
                {/* ***** Preloader Start ***** */}
                <div id="preloader">
                    <div className="jumper">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
                {/* ***** Preloader End ***** */}
                {/* Header */}
                <header className>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                <h2>Đông Á <em>Check</em></h2>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Trang Chủ
                          <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">Giới Thiệu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="products.html">Sản Phẩm</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Thêm Sản Phẩm</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <Slide />
            </div>

        );
    }
}

export default Navbar;