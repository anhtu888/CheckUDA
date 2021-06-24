import React from "react"
import Header from "./Header"
import MenuFooter from "./MenuFooter"
import Footer from "./Footer"
export default class Product extends React.Component {
    render() {
        return (
            <>
                <Header />
                <section className="home-main">
                    {/* breadcrumbs */}
                    <div className="breadcrumbs">
                        <div className="container">
                            <ul>
                                <li className="home"> <a href="/" title="Trở về trang chủ">Trang chủ</a> <span>//</span></li>
                                <li className="category13"><strong>Hoa quả sạch</strong></li>
                            </ul>
                            <div className="st-border" />
                        </div>
                    </div>
                    {/* End breadcrumbs */}
                    {/* Two columns content */}
                    <section className="content-main col2-left-layout">
                        <div className="main container">
                            <div className="row">
                                <div className="col-main col-sm-12 col-md-9 col-xs-12">
                                    <div className="category-title">
                                        <h1>Hoa quả sạch</h1>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
                                                <div className="item col-lg-12 col-md-12 col-sm-12 hidden-xs">
                                                    <div className="pro-first row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodinfo">
                                                                <a href="/nho-khong-hat" title="Nho không hạt">
                                                                    <h2>Nho không hạt</h2>
                                                                </a>
                                                                <div className="pro-desc">
                                                                    Nho rất tốt cho mẹ bầu và thai nhi
                                                                    Đầu tiên, hãy xem trong 1 quả nho tươi gồm có những thành phần nào:
                                                                    - Quả nho: Chứa từ 10 – 33% đường (fructose &amp; glucose); 65 – 85% là nước. Ngoài ra, nó còn chứa nhiều...
                                                                </div>
                                                                <div className="prodaction clearfix">
                                                                    <div className="pricebox">
                                                                        <p className="special-price"> <small>Giá: </small>59.000₫</p>
                                                                        <p className="old-price"><small>Giá: </small>95.000₫</p>



                                                                        <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodimg">
                                                                <div className="sale-label sale-top-right">-
                                                                    38% <i className="fa fa-star" /></div>
                                                                <div className="qrcode ">
                                                                    <img style={{ maxWidth: "70%", float: "right" }} src="asset/web/images/qr.png" alt="Mã QR code" />
                                                                </div>
                                                                <a href="/nho-khong-hat" title="Nho không hạt">
                                                                    <img src="//bizweb.dktcdn.net/thumb/large/100/053/074/products/nho.jpg?v=1457542270730" className="img-responsive" alt="Nho không hạt" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                7% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/dua-da-lat" title="Dứa Đà Lạt">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/dua.jpg?v=1457542519420" className="img-responsive" alt="Dứa Đà Lạt" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/dua-da-lat" title="Dứa Đà Lạt">
                                                                <h2>Dứa Đà Lạt</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>25.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>27.000₫</p>



                                                                    <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                17% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/chuoi-tieu" title="Chuối tiêu">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/chuoi.jpg?v=1457542797037" className="img-responsive" alt="Chuối tiêu" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/chuoi-tieu" title="Chuối tiêu">
                                                                <h2>Chuối tiêu</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>25.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>30.000₫</p>



                                                                    <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                14% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/ca-chua-bi" title="Cà chua bi">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/cachuabi.jpg?v=1457542993053" className="img-responsive" alt="Cà chua bi" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/ca-chua-bi" title="Cà chua bi">
                                                                <h2>Cà chua bi</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>30.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>35.000₫</p>


                                                                    <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                11% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/bo-vo-san" title="Bơ vỏ sần">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/bo.jpg?v=1457618883520" className="img-responsive" alt="Bơ vỏ sần" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/bo-vo-san" title="Bơ vỏ sần">
                                                                <h2>Bơ vỏ sần</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>40.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>45.000₫</p>



                                                                    <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                44% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/dua-hau" title="Dưa hấu">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/duahau.jpg?v=1457851385390" className="img-responsive" alt="Dưa hấu" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/dua-hau" title="Dưa hấu">
                                                                <h2>Dưa hấu</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>25.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>45.000₫</p>



                                                                    <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                14% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/ca-chua-bi" title="Cà chua bi">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/cachuabi.jpg?v=1457542993053" className="img-responsive" alt="Cà chua bi" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/ca-chua-bi" title="Cà chua bi">
                                                                <h2>Cà chua bi</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>30.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>35.000₫</p>


                                                                    <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <aside className="sidebar col-right col-md-3 col-xs-12 col-sm-12">
                                    <div className="service-content clearfix hidden-sm hidden-xs">
                                        <div className="col-md-12 row-top">
                                            <div className="service-1 col-service">
                                                <div className="service-icon">
                                                    <i className="fa fa-phone-square" />
                                                </div>
                                                <div className="service-text">
                                                    <span>Đặt hàng nhanh</span><br />
                                                    <strong>0963.647.129</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="service-3 col-service">
                                                <div className="service-icon">
                                                    <i className="fa fa-cart-plus" />
                                                </div>
                                                <div className="service-text">
                                                    <a href="/cart">
                                                        <span>Giỏ hàng</span><br />
                                                        <strong><span className="cart_count">0</span> Sản phẩm</strong>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block category">
                                        <div className="title">
                                            <h2>Danh mục</h2>
                                        </div>
                                        <div className="category-content">
                                            <ul className="list-collections submenu">
                                                <li className="level0 current"><a href="/product1">Hoa quả sạch</a></li>
                                                <li className="level0 "><a href="/product2">Rau sạch</a></li>
                                                <li className="level0 "><a href="/product3">Thịt sạch</a></li>
                                                <li className="level0 "><a href="/product4">Thuỷ - Hải sản sạch</a></li>
                                                <li className="level0 "><a href="/product5">Gạo - Hạt khô</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block blog-sidebar">
                                        <div className="title">
                                            <h2>Tin mới</h2>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="list-article">
                                                <li><a href="#">Cách nhận biết chuối chín tự nhiên và chuối chín do nhúng hóa chất</a></li>
                                                <li><a href="#">Những người này không nên ăn dứa trong đông</a></li>
                                                <li><a href="#">3 bí quyết lựa chọn thực phẩm sạch</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block policy">
                                        <div className="policy-content">
                                            <div className="policy-1">
                                                <a href="#"><i className="fa fa-gift" /> Chính sách quà tặng</a>
                                            </div>
                                            <div className="policy-2">
                                                <a href="#"><i className="fa fa-truck" /> Chính sách vận chuyển</a>
                                            </div>
                                            <div className="policy-3">
                                                <a href="#"><i className="fa fa-shopping-basket" /> Chính sách Mua hàng</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block banner hidden-sm hidden-xs">
                                        <a href="#"><img src="asset/web/images/block-banner.png" alt="block-banner" /></a>
                                    </div>
                                </aside>
                            </div>

                        </div>
                    </section>
                    {/* End Two columns content */}
                </section>
                <MenuFooter />
                <Footer />

            </>
        )
    }
}