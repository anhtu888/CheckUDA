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

          {/* header inner */}
          <div className="container fluid">
            <div className="row produc-sp">
              <div className="col-xl-6">
                <h1 className="produc-hot" ><b>Danh Mục Sản Phẩm</b></h1>
              </div>
              <div className="col-xl-6 "><a href="/products-add" className="btn btn-primary" style={{ float: 'right', marginTop: '15px' }}>
                Thêm sản phẩm
          </a>
              </div>
            </div>
            <div className="row" style={{ paddingBottom: '30px' }}>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/spp.1png.png" alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title">Dưa Hấu</h4>
                  <a href="/qr" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/s6.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Cải Ngọt</h5>
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/sp3.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Xoài</h5>
                  <p className="card-text" />
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/sp4.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Ôỉ Ruột Trắng</h5>
                  <p className="card-text" />
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>

            </div>
            <div className="row " style={{ paddingBottom: '30px' }}>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/sp5.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Thanh Long</h5>
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/sp7.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Măng Cụt</h5>
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/sp8.png" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Chôm Chôm</h5>
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="image/images/sp8.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Sầu Riêng</h5>
                  <a href="#" className="btn btn-primary">Mua Hàng</a>
                </div>
              </div>
            </div>
            <div>
              <div className="row" style={{ paddingBottom: '30px' }}>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/spp.1png.png" alt="Card image cap" />
                  <div className="card-body">
                    <h4 className="card-title">Dưa Hấu</h4>
                    <a href="chitiet.html" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/s6.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Cải Ngọt</h5>
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/sp3.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Xoài</h5>
                    <p className="card-text" />
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/sp4.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Ôỉ Ruột Trắng</h5>
                    <p className="card-text" />
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
              </div>
              <div className="row " style={{ paddingBottom: '30px' }}>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/sp5.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Thanh Long</h5>
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/sp7.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Măng Cụt</h5>
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/sp8.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Chôm Chôm</h5>
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{ width: '18rem' }}>
                  <img className="card-img-top" src="image/images/sp8.jpg" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Sầu Riêng</h5>
                    <a href="#" className="btn btn-primary">Mua Hàng</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <footr>
            <Footer />
          </footr>
        </header></div>

    )
  }
}
export default Producsp;