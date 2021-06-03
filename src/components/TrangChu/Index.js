import React from 'react';
import Footer from '../Footer';
import Menu from './Menu';
import Slide from './Slide';
class Index extends React.Component {
    render() {
        return (
            <>

                <header>
                    <Menu />
                </header>
                <div>
                    <Slide />
                </div>
                <div>
                    <div className="latest-products">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>Danh Sách Sản Phẩm</h2>
                                        <a href="products.html">Xem tất cả <i className="fa fa-angle-right" /></a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-item">
                                        <a href="#"><img src="assets/images/i1.jpg" alt="" /></a>
                                        <div className="down-content">
                                            <a href="#">
                                                <h4>Xoài</h4>
                                            </a>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                            <button className="btn btn-danger">Mua Hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-item">
                                        <a href="#"><img src="assets/images/i2.jpg" alt="" /></a>
                                        <div className="down-content">
                                            <a href="#">
                                                <h4>Ôỉ</h4>
                                            </a>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                            <button className="btn btn-danger">Mua Hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-item">
                                        <a href="#"><img src="assets/images/i3.jpg" alt="" /></a>
                                        <div className="down-content">
                                            <a href="#">
                                                <h4>Thanh Long</h4>
                                            </a>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                            <button className="btn btn-danger">Mua Hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-item">
                                        <a href="#"><img src="assets/images/i4.jpg" alt="" /></a>
                                        <div className="down-content">
                                            <a href="#">
                                                <h4>Măng Cụt</h4>
                                            </a>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                            <button className="btn btn-danger">Mua Hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-item">
                                        <a href="#"><img src="assets/images/i5.jpg" alt="" /></a>
                                        <div className="down-content">
                                            <a href="#">
                                                <h4>Sầu Riêng</h4>
                                            </a>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                            <button className="btn btn-danger">Mua Hàng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-item">
                                        <a href="#"><img src="assets/images/i6.jpg" alt="" /></a>
                                        <div className="down-content">
                                            <a href="#">
                                                <h4>Chôm Chôm</h4>
                                            </a>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                                            <button className="btn btn-danger">Mua Hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="best-features">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading">
                                        <h2>Giới Thiệu Về Đông Á Check</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="left-content">
                                        <h4>Vậy Đông Á Check là gì?</h4>
                                        <p>Là một trang web có thể truy xuất nguồn gốc trực tiếp của các loại sản phẩm có trên trang web hoặc có thể
                                        truy xuất bằng phương thức
                                        quét mã QRcode thông qua những mã QR có đi theo từng sản phẩm , đó là tính năng nhanh gọn , tiết kiệm thời
              gian cho mọi người khi đi mua thực phẩm.</p>
                                        <ul className="featured-list">
                                            <li>Nguồn gốc sản phẩm rõ ràng.</li>
                                            <li>Tra cứu sản phẩm nhanh chóng.</li>
                                            <li>Kiểm soát quy trình của sản phẩm.</li>
                                            <li>Quy trình bảo quản của sản phẩm.</li>
                                            <li>Có thể thêm sản phẩm của chính bạn.</li>
                                        </ul>
                                        <a href="about.html" className="filled-button">Read More</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="right-image">
                                        <img src="assets/images/i9.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="call-to-action">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner-content">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h4>Bạn có thể thêm những sản phẩm của chính bạn.</h4>
                                                <p>Đông Á Check không chỉ là trang web truy xuất nguồng gốc . Mà nó còn có thể thêm sản phẩm của chính
                                                bạn.
                </p>
                                            </div>
                                            <div className="col-md-4">
                                                <a href="#" className="filled-button">Thêm Sản Phẩm</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />

            </>
        );
    }
}
export default Index;