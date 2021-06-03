import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './TrangChu/Menu';
import { Link, NavLink } from "react-router-dom";
import Footer from './Footer';

class Producsp extends Component {
  render() {
    return (

      <div>
        <header>
          <Menu />
        </header>
        <div className="page-heading products-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>Đông Á Check</h4>
                  <h2>Danh Sách Các Sản Phẩm</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="filters">
                  <ul>
                    <li className="active" data-filter="*">Tất cả sản Phẩm</li>
                    <li data-filter=".des">Mới nhất</li>
                    <li data-filter=".dev">Bảo Quản Lâu</li>
                    <li data-filter=".gra">Bảo Quản Nhanh</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="filters-content">
                  <div className="row grid">
                    <div className="col-lg-4 col-md-4 all des">
                      <div className="product-item">
                        <a href="#"><img src="assets/images/i1.jpg" alt="" /></a>
                        <div className="down-content">
                          <a href="chitiet.html">
                            <h4>Xoài</h4>
                          </a>
                          <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 all dev">
                      <div className="product-item">
                        <a href="#"><img src="assets/images/i2.jpg" alt="" /></a>
                        <div className="down-content">
                          <a href="#">
                            <h4>Ôỉ</h4>
                          </a>
                          <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 all gra">
                      <div className="product-item">
                        <a href="#"><img src="assets/images/i3.jpg" alt="" /></a>
                        <div className="down-content">
                          <a href="#">
                            <h4>Thanh Long</h4>
                          </a>
                          <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 all gra">
                      <div className="product-item">
                        <a href="#"><img src="assets/images/i4.jpg" alt="" /></a>
                        <div className="down-content">
                          <a href="#">
                            <h4>Măng Cụt </h4>
                          </a>
                          <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 all dev">
                      <div className="product-item">
                        <a href="#"><img src="assets/images/i5.jpg" alt="" /></a>
                        <div className="down-content">
                          <a href="#">
                            <h4>Sầu Riêng</h4>
                          </a>
                          <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 all des">
                      <div className="product-item">
                        <a href="#"><img src="assets/images/i6.jpg" alt="" /></a>
                        <div className="down-content">
                          <a href="#">
                            <h4>Chôm Chôm</h4>
                          </a>
                          <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <ul className="pages">
                  <li className="active"><a href="#">1</a></li>
                  <li ><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />





      </div>


    )
  }
}
export default Producsp;