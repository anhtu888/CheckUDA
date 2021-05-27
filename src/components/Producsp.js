import React, { Component } from 'react';
import Navbar from './Navbar';
import Menu from './TrangChu/Menu';
import { Link, NavLink } from "react-router-dom";

class Producsp extends Component {
    render() {
        return (

            <div>
  <header>
      <Menu/>
      
    {/* header inner */}
    <div className="container fluid">
      <div className="row produc-sp" style={{background: 'peachpuff'}}>
        <div className="col-xl-6">
          <h1 className="produc-hot"><b>Danh Mục Sản Phẩm</b></h1>
        </div>
        <div className="col-xl-6 "><a href="/products-add" className="btn btn-primary"> 
            Thêm sản phẩm
          </a>
        </div>
      </div>
      <div className="row" style={{paddingBottom: '30px'}}>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{width: '18rem'}}>
          <img className="card-img-top" src="images/spp.1png.png" alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">Dưa Hấu</h4>
            <a href="chitiet.html" className="btn btn-primary">Mua Hàng</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{width: '18rem'}}>
          <img className="card-img-top" src="images/s6.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Cải Ngọt</h5>
            <a href="#" className="btn btn-primary">Mua Hàng</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{width: '18rem'}}>
          <img className="card-img-top" src="./images/sp3.png" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Xoài</h5>
            <p className="card-text" />
            <a href="#" className="btn btn-primary">Mua Hàng</a>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 card" style={{width: '18rem'}}>
          <img className="card-img-top" src="./images/sp4.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Ôỉ Ruột Trắng</h5>
            <p className="card-text" />
            <a href="#" className="btn btn-primary">Mua Hàng</a>
          </div>
        </div>
      </div>
    </div>
    <footr>
      <div className="footer ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <a href="#" className="logo_footer"> <img src="images/logo3.png" alt="#" /></a>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
                  <div className="address">
                    <h3>Điạ chỉ </h3>
                    <ul className="loca">
                      <li>
                        <a href="#" />33 - XVNT
                        <br />Q.Hải Châu - DN
                      </li>
                      <li>
                        <a href="#" />(0123456789)
                      </li>
                      <li>
                        <a href="#" />dongacheck@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="address">
                    <h3>Mạng Xã Hội</h3>
                    <ul className="Menu_footer">
                      <li className="active"> <a href="#">Twitter</a> </li>
                      <li><a href="#">Facebook</a> </li>
                      <li><a href="#">Instagram</a> </li>
                      <li><a href="#">Zalo</a> </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 ">
                  <div className="address">
                    <h3>Nhận Xét Của Bạn</h3>
                    <form className="news">
                      <input className="newslatter" placeholder="Enter your email" type="text" name=" Email của bạn" />
                      <button className="submit">Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <p>Copyright © 2019 Design by <a href="#">đông á check </a></p>
          </div>
        </div>
      </div>
    </footr>
  </header></div>

        )
    }
}
export default Producsp;