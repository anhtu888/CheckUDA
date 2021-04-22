import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class Slide extends React.Component {

    render() {
        return (
            <section id="slide" className="slide">
                <div>
                    <div >
                        <OwlCarousel items={1}
                            className="owl-theme"
                            loop
                            nav
                            autoplay
                            margin={8} >
                            <div className="container-fluid padding_dd">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-bg">
                                            <span>Chào Mừng Tới Với ĐÔNG Á Check</span>
                                            <h1>Kiểm Tra Nguồn Gốc Thực Phẩm</h1>
                                            <p>Nhận biết thấy nỗi lo của mọi gia đình khi phải chọn lựa những loại thực phẩm tươi ngon mà vẫn
                                            phải đảm bảo
                                            vệ sinh anh toàn thực phẩm .Nên từ đó chúng tôi đã cho ra đời trang web ĐÔNG Á Check để mọi
                                            người yên tâm
                      mua cái loại thực phẩm mà có thể biết xuấn xứ rõ ràng cảu loại thực phẩm đó </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="images_box">
                                            <figure><img src="image/images/img2.png" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid padding_dd">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-bg">
                                            <span>Chào Mừng Tới Với ĐÔNG Á Check</span>
                                            <h1>Kiểm Tra Nguồn Gốc Thực Phẩm</h1>
                                            <p>Nhận biết thấy nỗi lo của mọi gia đình khi phải chọn lựa những loại thực phẩm tươi ngon mà vẫn
                                            phải đảm bảo
                                            vệ sinh anh toàn thực phẩm .Nên từ đó chúng tôi đã cho ra đời trang web ĐÔNG Á Check để mọi
                                            người yên tâm
                      mua cái loại thực phẩm mà có thể biết xuấn xứ rõ ràng cảu loại thực phẩm đó </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="images_box">
                                            <figure><img src="image/images/img2.png" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid padding_dd">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="text-bg">
                                            <span>Chào Mừng Tới Với ĐÔNG Á Check</span>
                                            <h1>Kiểm Tra Nguồn Gốc Thực Phẩm</h1>
                                            <p>Nhận biết thấy nỗi lo của mọi gia đình khi phải chọn lựa những loại thực phẩm tươi ngon mà vẫn
                                            phải đảm bảo
                                            vệ sinh anh toàn thực phẩm .Nên từ đó chúng tôi đã cho ra đời trang web ĐÔNG Á Check để mọi
                                            người yên tâm
                      mua cái loại thực phẩm mà có thể biết xuấn xứ rõ ràng cảu loại thực phẩm đó </p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="images_box">
                                            <figure><img src="image/images/img2.png" /></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section >
        )
    }
}