import React from "react"
import Header from "./Header"
import MenuFooter from "./MenuFooter"
import Footer from "./Footer"
export default class Product5 extends React.Component {
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
                                <li className="category13"><strong>Gạo - Hạt khô</strong></li>
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
                                        <h1>Gạo - Hạt khô</h1>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
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
                                                <li className="level0 "><a href="/thuy-hai-san-sach">Thuỷ - Hải sản sạch</a></li>
                                                <li className="level0 current"><a href="/gao-hat-kho">Gạo - Hạt khô</a></li>
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