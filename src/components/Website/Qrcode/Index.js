import React from 'react';
import Slide from '../Slide';
import HeaderIndex from '../Header/Index'

class Index extends React.Component {
    render() {
        return (
            <div>
                <HeaderIndex />
                <Slide />

                <div className="container">
                    <div style={{ marginTop: '100px' }}>
                        <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Người chăm sóc : Nguyễn Đại Mai Tiến</h4>
                    </div>
                    <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                        <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Giai Đoạn Sinh Trưởng</h5>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <h6 style={{ lineHeight: '35px' }}>Gieo hạt &nbsp; &nbsp; &nbsp;&nbsp; <span>: 3-5-2021</span> </h6>
                        <h6 style={{ lineHeight: '35px' }}>Cây non &nbsp; &nbsp; &nbsp;&nbsp; <span>: 10-5-2021</span></h6>
                        <h6 style={{ lineHeight: '35px' }}>Nuôi quả &nbsp; &nbsp; &nbsp;&nbsp; <span>: 15-5-2021</span></h6>
                        <h6 style={{ lineHeight: '35px' }}>Thụ phấn &nbsp; &nbsp; &nbsp;&nbsp; <span>: 25-5-2021</span></h6>
                        <h6 style={{ lineHeight: '35px' }}>Tuyển trái &nbsp; &nbsp; &nbsp;&nbsp; <span>: 5-6-2021</span></h6>
                        <h6 style={{ lineHeight: '35px' }}>Thu Hoạch &nbsp; &nbsp; &nbsp;&nbsp; <span>: 8-7-2021</span></h6>
                    </div>
                    <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                        <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Bảo Quản</h5>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <h6 style={{ lineHeight: '35px' }}>5-10 Độ(C) &nbsp; &nbsp; &nbsp;&nbsp;:13-15 ngày </h6>
                        <h6 style={{ lineHeight: '35px' }}>10-15 Độ(C) &nbsp; &nbsp; &nbsp;&nbsp;:7-10 ngày </h6>
                        <h6 style={{ lineHeight: '35px' }}>15-20 Độ(C) &nbsp; &nbsp; &nbsp;&nbsp;:5-7 ngày </h6>
                    </div>
                    <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                        <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Chứng Chỉ-Chứng Nhân</h5>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <p style={{ lineHeight: '35px' }}>Số chứng nhận UDA</p>
                        <h6 style={{ lineHeight: '35px' }}>UDA-0021</h6>
                        <p style={{ lineHeight: '35px' }}>Chứng chỉ UDA</p>
                        <h6 style={{ lineHeight: '35px' }}>UDA Xoài</h6>
                    </div>
                    <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                        <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Nơi Trồng : Thuộc trang trại đại học Đông Á (UDA)</h5>
                    </div>
                </div>

                <footer style={{ marginTop: '100px' }}>
                    <div className="footer-part wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div className="icon-default icon-dark">
                            <img style={{ maxWidth: '60%' }} src="asset/web/images/logo.png" alt="" />
                        </div>
                        <div className="container">
                            {/* <div className="footer-inner">
                            <div className="footer-info">
                                <h3>Đông Á CHECK</h3>
                                <p>33 Xô Viết Nghệ Tĩnh - Hải Châu - Đà Nẵng</p>
                                <p><a href="#">123 456 7890</a></p>
                                <p><a href="#">donga@uda.edu</a></p>
                            </div>
                        </div> */}
                            <div className="copy-right">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12 copyright-before" style={{ marginTop: '100px' }}>
                                        <span>Copyright © 2021 Đông Á UDA.</span>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 copyright-after">

                                        <div className="social-round">
                                            {/* <ul>
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                            <li><a href="#"><i className="fa fa-google" aria-hidden="true" /></a></li>
                                        </ul> */}
                                            <h3>Đông Á CHECK</h3>
                                            <p>33 Xô Viết Nghệ Tĩnh - Hải Châu - Đà Nẵng</p>
                                            <p><a href="#">123 456 7890</a></p>
                                            <p><a href="#">donga@uda.edu</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icon-find">
                            <a href="#">
                                <img className="icon__footer" src="asset/web/images/arrow-top.png" alt="" />
                                {/* <span>Find us on Map</span> */}
                            </a>
                        </div>
                        <div className="location-footer-map">
                            <div className="icon-find-location">
                                <a href="#">
                                    <img src="asset/web/images/location.png" alt="" />
                                    <span>Find us on Map</span>
                                </a>
                            </div>
                            <div className="footer-map-outer">
                                <div id="footer-map" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        )
    }
}
export default Index;