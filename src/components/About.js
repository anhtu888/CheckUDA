import React, { Component } from 'react';
import Footer from './Footer';
import Menu from './TrangChu/Menu'
class About extends Component {

    render() {
        return (
            <div>
                <Menu />
                <div id="about" className="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="about-box">
                                    <h2 style={{ lineHeight: '50px' }}>Giới Thiệu về Đông Á Check </h2>
                                    <p>Đông Á Check là trang web mọi người dùng có thể kiểm tra sản phẩm về nguồn gốc , xuất xú
                                    , ngày gieo
                                    trồng ,
                                    lượng thuốc bảo vệ thực vật , nơi mà mọi người có thể yên tâm về chất lượng sản phẩm .Và
                                    cũng là nơi à
                                    người bán có thể
                                    giới thiệu sản phẩm của mình , và bắt buộc phải khai báo rõ ràng về sản phẩm của mình
                                    khi đăng ký lên
                        trang web. </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padding_rl">
                                <div className="about-box_img">
                                    <figure><img src="image/images/sp8.jpg" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end abouts */}
                <footr>
                    <Footer />
                </footr>
            </div>

        );
    }
}

export default About;