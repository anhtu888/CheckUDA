import React from 'react';
import Slide from './Slide';
class Index extends React.Component {
    render() {
        return (
            <>
                <div className="loader_bg">
                    <div className="loader"><img src="image/images/logo3.png" alt="#" /></div>
                </div>
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
                    <Slide />
                </header>

                <div id="about" className="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="about-box">
                                    <h2 style={{ lineHeight: '50px' }}>Giới Thiệu về Đông Á Check </h2>
                                    <p>Đông Á Check là trang web mọi người dùng có thể kiểm tra sản phẩm về nguồn gốc , xuất xú , ngày gieo
                                    trồng ,
                                    lượng thuốc bảo vệ thực vật , nơi mà mọi người có thể yên tâm về chất lượng sản phẩm .Và cũng là nơi à
                                    người bán có thể
                                    giới thiệu sản phẩm của mình , và bắt buộc phải khai báo rõ ràng về sản phẩm của mình khi đăng ký lên
            trang web. </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
                                <div className="about-box_img">
                                    <figure><img src="image/images/about.jpg" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="vegetable" className="vegetable">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2> Tính Năng Của <strong className="llow">Đông á Check</strong> </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                                <div className="vegetable_shop">
                                    <h3>Truy Xuất Nguồn Gốc</h3>
                                    <p>Là một trang web có thể truy xuất nguồn gốc trực tiếp của các loại sản phẩm có trên trang web hoặc có thể
                                    truy xuất bằng phương thức
                                    quét mã QRcode thông qua những mã QR có đi theo từng sản phẩm , đó là tính năng nhanh gọn , tiết kiệm thời
                                    gian cho mọi người khi đi mua thực phẩm.
          </p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                                <div className="vegetable_img">
                                    <figure><img src="image/images/v1.jpg" alt="#" /></figure>
                                    <span>01</span>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
                                <div className="vegetable_img margin_top">
                                    <figure><img src="image/images/v2.jpg" alt="#" /></figure>
                                    <span>02</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="testimonial" className="clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <h2>Nhận Xét Của Người Dùng</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="clients_red">
                        <div className="container">
                            <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                                {/* Indicators */}
                                <ul className="carousel-indicators">
                                    <li data-target="#testimonial_slider" data-slide-to={0} className />
                                    <li data-target="#testimonial_slider" data-slide-to={1} className="active" />
                                    <li data-target="#testimonial_slider" data-slide-to={2} className />
                                </ul>
                                {/* The slideshow */}
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <div className="testomonial_section">
                                            <div className="full testimonial_cont">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                                        <div className="testomonial_img">
                                                            <figure><img src="image/images/tes.jpg" alt="#" /></figure>
                                                            <i><img src="image/images/test_con.png" alt="#" /></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                                        <div className="cross_inner">
                                                            <h3>Mai Tiến<br /><strong className="ornage_color">cảm nhận</strong></h3>
                                                            <p>Qúa tuyệt vời , đây là một trong những trang web về truy xuất nguồn gốc sản phẩm mà tôi thấy
                                                            là
                                                            tốt nhất
                      </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item active">
                                        <div className="testomonial_section">
                                            <div className="full center">
                                            </div>
                                            <div className="full testimonial_cont ">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                                        <div className="testomonial_img">
                                                            <figure><img src="image/images/tes.jpg" alt="#" /></figure>
                                                            <i><img src="image/images/test_con.png" alt="#" /></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                                        <div className="cross_inner">
                                                            <h3>Anh Tú<br /><strong className="ornage_color">cảm nhận</strong></h3>
                                                            <p> Thật là hạnh phúc , từ khi có ứng dụng này tôi đã an tâm hơn khi đi lựa chọn thực phẩm cho
                                                            người thân trong gia đình.
                      </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div id="testomonial" className="testomonial_section">
                                            <div className="full center">
                                            </div>
                                            <div className="full testimonial_cont ">
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 pa_right">
                                                        <div className="testomonial_img">
                                                            <figure><img src="image/images/tes.jpg" alt="#" /></figure>
                                                            <i><img src="image/images/test_con.png" alt="#" /></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 pa_left">
                                                        <div className="cross_inner">
                                                            <h3>Phúc Hưng<br /><strong className="ornage_color">cảm nhận</strong></h3>
                                                            <p>Qúa tuyệt , tôi đánh giá cao ứng dụng này.
                      </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

            </>
        );
    }
}
export default Index;