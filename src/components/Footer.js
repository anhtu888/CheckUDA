import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="#" className="logo_footer"> <img src="image/images/logo3.png" alt="#" /></a>
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
        );
    }
}

export default Footer;