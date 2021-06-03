import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './TrangChu/Menu';
import { Link, NavLink } from "react-router-dom";
import Footer from './Footer';

class Producsp extends Component {
  render() {
    return (
      <>
        <header>
          <Menu />
        </header>


        <div>
          {/* Page Content */}
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
                            <div className="row">
                              <div className="col-8"><img src="/assets/images/qr.png" alt="" /></div>
                              <div className="col-4" style={{ position: 'relative' }}>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style={{ position: 'absolute', bottom: '20px' }}>
                                  Chi Tiết
                        </button>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                  <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className=" modal-content">
                                      <div className="sp">
                                        <h3 style={{ color: 'black', textAlign: 'center', marginTop: '10px', borderBottom: 'solid black 1px' }} className="modal-title" id="exampleModalLongTitle">
                                          Xoài</h3>
                                      </div>
                                      <div className="modal-body">
                                        <div className="card-body" style={{ textAlign: 'center' }}>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Người Chăm Sóc : Anh Tú
                                  </h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Người Bán : Mai Tiến</h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Bảo Quản : 20 độ C</h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Tên Sản Phẩm :Dưa Hấu
                                  </h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Gía Sản Phẩm :20$</h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Nơi Trồng :Đà Nẵng</h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Ngày Gieo Trồng
                                    :23/3/2021</h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Ngày Thu Hoạch
                                    :15/5/2021</h5>
                                          <h5 classname="card-title sapham" style={{ lineHeight: '30px' }}>Đơn Vị Cung Cấp : Công
                                    Ty UDA</h5>
                                        </div>
                                      </div>
                                      <div style={{ borderTop: 'solid black 1px' }} className="sp1">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" style={{ float: 'right', margin: '10px' }}>Đóng</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                            <div className="row">
                              <div className="col-8"><img src="/assets/images/qr.png" alt="" /></div>
                              <div className="col-4" style={{ position: 'relative' }}>
                                <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px' }}>Chi Tiết</button>
                              </div>
                            </div>
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
                            <div className="row">
                              <div className="col-8"><img src="/assets/images/qr.png" alt="" /></div>
                              <div className="col-4" style={{ position: 'relative' }}>
                                <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px' }}>Chi Tiết</button>
                              </div>
                            </div>
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
                            <div className="row">
                              <div className="col-8"><img src="/assets/images/qr.png" alt="" /></div>
                              <div className="col-4" style={{ position: 'relative' }}>
                                <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px' }}>Chi Tiết</button>
                              </div>
                            </div>
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
                            <div className="row">
                              <div className="col-8"><img src="/assets/images/qr.png" alt="" /></div>
                              <div className="col-4" style={{ position: 'relative' }}>
                                <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px' }}>Chi Tiết</button>
                              </div>
                            </div>
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
                            <div className="row">
                              <div className="col-8"><img src="/assets/images/qr.png" alt="" /></div>
                              <div className="col-4" style={{ position: 'relative' }}>
                                <button className="btn btn-primary" style={{ position: 'absolute', bottom: '20px' }}>Chi Tiết</button>
                              </div>
                            </div>
                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <ul className="pages">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#"><i className="fa fa-angle-double-right" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="inner-content">
                    <p>Copyright © 2020 Sixteen Clothing Co., Ltd.
              - Design: <a rel="nofollow noopener" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>








      </>



    )
  }
}
export default Producsp;