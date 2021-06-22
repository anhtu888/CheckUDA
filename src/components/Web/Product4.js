import React from "react"
import Header from "./Header"
import MenuFooter from "./MenuFooter"
import Footer from "./Footer"
export default class Product4 extends React.Component {
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
                                <li className="category13"><strong>Thuỷ - Hải sản sạch</strong></li>
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
                                        <h1>Thuỷ - Hải sản sạch</h1>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
                                                <div className="item col-lg-12 col-md-12 col-sm-12 hidden-xs">
                                                    <div className="pro-first row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodinfo">
                                                                <a href="/ca-thu-loai-ngon" title="Cá thu loại ngon">
                                                                    <h2>Cá thu loại ngon</h2>
                                                                </a>
                                                                <div className="pro-desc">
                                                                    Cá Thu – loại cá rất quen thuộc được nhiều người thích ăn bởi nguồn đạm, chất béo… trong cá thu rất bổ dưỡng đối với sức khỏe của mọi người, từ người già, trẻ em, phụ nữ mang thai và phụ nữ trong thời gian sau khi sinh....
                                                                </div>
                                                                <div className="prodaction clearfix">
                                                                    <div className="pricebox">
                                                                        <p className="special-price"> <small>Giá: </small>100.000₫</p>
                                                                        <p className="old-price"><small>Giá: </small>150.000₫</p>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodimg">
                                                                <div className="sale-label sale-top-right">-
                                                                    33% <i className="fa fa-star" /></div>
                                                                <div className="qrcode ">
                                                                    <img style={{ maxWidth: "70%", float: "right" }} src="asset/web/images/qr.png" alt="Mã QR code" />
                                                                </div>
                                                                <a href="/ca-thu-loai-ngon" title="Cá thu loại ngon">
                                                                    <img src="//bizweb.dktcdn.net/thumb/large/100/053/074/products/cathu.jpg?v=1456496264743" className="img-responsive" alt="Cá thu loại ngon" />
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
                                                                20% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/be-be-loai-to" title="Bề bề loại to">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/bebe.jpg?v=1456496589787" className="img-responsive" alt="Bề bề loại to" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/be-be-loai-to" title="Bề bề loại to">
                                                                <h2>Bề bề loại to</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>200.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>250.000₫</p>
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
                                                            <a href="/tom-hum-loai-1" title="Tôm hùm loại 1">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/tom.jpg?v=1456496954320" className="img-responsive" alt="Tôm hùm loại 1" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/tom-hum-loai-1" title="Tôm hùm loại 1">
                                                                <h2>Tôm hùm loại 1</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>85.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>105.000₫</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                29% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/cua-bien" title="Cua Cà Mau Chất lượng">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/cua.jpg?v=1456497278093" className="img-responsive" alt="Cua Cà Mau Chất lượng" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/cua-bien" title="Cua Cà Mau Chất lượng">
                                                                <h2>Cua Cà Mau Chất lượng</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>50.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>70.000₫</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                12% <i className="fa fa-star" /></div>
                                                            <div className="qrcode ">
                                                                <img src="asset/web/images/qr.png" alt="Mã QR code" />
                                                            </div>
                                                            <a href="/muc-tuoi" title="Mực ống">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/muc.jpg?v=1456497515940" className="img-responsive" alt="Mực ống" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/muc-tuoi" title="Mực ống">
                                                                <h2>Mực ống</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>150.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>170.000₫</p>
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
                                                <li className="level0 "><a href="/thit-sach">Thịt sạch</a></li>
                                                <li className="level0 current"><a href="/thuy-hai-san-sach">Thuỷ - Hải sản sạch</a></li>
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