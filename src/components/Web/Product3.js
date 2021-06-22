import React from "react"
import Header from "./Header"
import MenuFooter from "./MenuFooter"
import Footer from "./Footer"
export default class Product3 extends React.Component {
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
                                <li className="category13"><strong>Thịt sạch</strong></li>
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
                                        <h1>Thịt sạch</h1>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
                                                <div className="item col-lg-12 col-md-12 col-sm-12 hidden-xs">
                                                    <div className="pro-first row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodinfo">
                                                                <a href="/lac-vai-heo" title="Thịt nạc vai lợn TNV10">
                                                                    <h2>Thịt nạc vai lợn TNV10</h2>
                                                                </a>
                                                                <div className="pro-desc">
                                                                    Thịt lợn là thực phẩm ít khi thiếu trong các bữa cơm hằng ngày của chúng ta, nhưng làm sao để đảm bảo được dinh dưỡng và chất lượng thịt khi trên thị trường xuất hiện hàng loạt những cơ sở buôn bán không uy tín, lấy lợi nhuận...
                                                                </div>
                                                                <div className="prodaction clearfix">
                                                                    <div className="pricebox">
                                                                        <p className="special-price"> <small>Giá: </small>120.000₫</p>
                                                                        <p className="old-price"><small>Giá: </small>150.000₫</p>
                                                                        <a href="/qrcode" className="btn btn-success">Xem Chi Tiết</a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodimg">
                                                                <div className="sale-label sale-top-right">-
                                                                    20% <i className="fa fa-star" /></div>
                                                                <div className="qrcode ">
                                                                    <img style={{ maxWidth: "70%", float: "right" }} src="asset/web/images/qr.png" alt="Mã QR code" />
                                                                </div>
                                                                <a href="/lac-vai-heo" title="Thịt nạc vai lợn TNV10">
                                                                    <img src="//bizweb.dktcdn.net/thumb/large/100/053/074/products/vaiheo.jpg?v=1456497783687" className="img-responsive" alt="Thịt nạc vai lợn TNV10" />
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
                                                                14% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/trung-ga-sach" title="Trứng gà sạch">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/trungga.jpg?v=1456498100447" className="img-responsive" alt="Trứng gà sạch" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/trung-ga-sach" title="Trứng gà sạch">
                                                                <h2>Trứng gà sạch</h2>
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
                                                                19% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/thit-heo-ba-chi" title="Thịt lợn ba chỉ sạch">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/lonbachi.jpg?v=1456498408320" className="img-responsive" alt="Thịt lợn ba chỉ sạch" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/thit-heo-ba-chi" title="Thịt lợn ba chỉ sạch">
                                                                <h2>Thịt lợn ba chỉ sạch</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>85.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>105.000₫</p>
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
                                                                7% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/thit-bo-tuoi-loai-1" title="Thịt bò tươi sống">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/botuoi.jpg?v=1456498668607" className="img-responsive" alt="Thịt bò tươi sống" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/thit-bo-tuoi-loai-1" title="Thịt bò tươi sống">
                                                                <h2>Thịt bò tươi sống</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>250.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>270.000₫</p>
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
                                                                21% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/thit-bo-uc-loai-1" title="Thịt gà sạch">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/thitga.jpg?v=1456498985200" className="img-responsive" alt="Thịt gà sạch" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/thit-bo-uc-loai-1" title="Thịt gà sạch">
                                                                <h2>Thịt gà sạch</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>95.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>120.000₫</p>
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
                                                                7% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/thit-be-uc" title="Thịt bò nhập khẩu">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/thitbe.jpg?v=1456498781650" className="img-responsive" alt="Thịt bò nhập khẩu" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/thit-be-uc" title="Thịt bò nhập khẩu">
                                                                <h2>Thịt bò nhập khẩu</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>250.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>270.000₫</p>
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
                                                                19% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/thit-heo-ba-chi" title="Thịt lợn ba chỉ sạch">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/lonbachi.jpg?v=1456498408320" className="img-responsive" alt="Thịt lợn ba chỉ sạch" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/thit-heo-ba-chi" title="Thịt lợn ba chỉ sạch">
                                                                <h2>Thịt lợn ba chỉ sạch</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>85.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>105.000₫</p>
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
                                                <li className="level0 "><a href="/hoa-qua-sach">Hoa quả sạch</a></li>
                                                <li className="level0 "><a href="/rau-sach">Rau sạch</a></li>
                                                <li className="level0 current"><a href="/thit-sach">Thịt sạch</a></li>
                                                <li className="level0 "><a href="/thuy-hai-san-sach">Thuỷ - Hải sản sạch</a></li>
                                                <li className="level0 "><a href="/gao-hat-kho">Gạo - Hạt khô</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block blog-sidebar">
                                        <div className="title">
                                            <h2>Tin mới</h2>
                                        </div>
                                        <div className="blog-content">
                                            <ul className="list-article">
                                                <li><a href="/cach-nhan-biet-chuoi-chin-tu-nhien-va-chuoi-chin-do-nhung-hoa-chat">Cách nhận biết chuối chín tự nhiên và chuối chín do nhúng hóa chất</a></li>
                                                <li><a href="/nhung-nguoi-nay-khong-nen-an-dua-trong-dong">Những người này không nên ăn dứa trong đông</a></li>
                                                <li><a href="/3-bi-quyet-lua-chon-thuc-pham-sach">3 bí quyết lựa chọn thực phẩm sạch</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block policy">
                                        <div className="policy-content">
                                            <div className="policy-1">
                                                <a href="/chinh-sach"><i className="fa fa-gift" /> Chính sách quà tặng</a>
                                            </div>
                                            <div className="policy-2">
                                                <a href="/dieu-khoan"><i className="fa fa-truck" /> Chính sách vận chuyển</a>
                                            </div>
                                            <div className="policy-3">
                                                <a href="/huong-dan"><i className="fa fa-shopping-basket" /> Chính sách Mua hàng</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block banner hidden-sm hidden-xs">
                                        <a href="/collections/all"><img src="asset/web/images/block-banner.png" alt="block-banner" /></a>
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