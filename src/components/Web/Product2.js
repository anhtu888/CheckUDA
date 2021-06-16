import React from "react"
import Header from "./Header"
import MenuFooter from "./MenuFooter"
import Footer from "./Footer"
export default class Product2 extends React.Component {
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
                                <li className="category13"><strong>Rau sạch</strong></li>
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
                                        <h1>Rau sạch</h1>
                                    </div>
                                    <div className="prod-main">
                                        <div className="prod-content">
                                            <div className="row">
                                                <div className="item col-lg-12 col-md-12 col-sm-12 hidden-xs">
                                                    <div className="pro-first row">
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodinfo">
                                                                <a href="/sup-lo-xanh" title="Súp lơ xanh">
                                                                    <h2>Súp lơ xanh</h2>
                                                                </a>
                                                                <div className="pro-desc">
                                                                    Đối với cơ thể con người thì thành phần khoáng chất-vitamin của súp lơ rất có ích bởi nó có tác dụng từ nhiều mặt: Kích thích các quá trình trao đổi chất và tham gia vào hoạt động tạo máu để củng cố hệ tim-mạch, cũng như các...
                                                                </div>
                                                                <div className="prodaction clearfix">
                                                                    <div className="pricebox">
                                                                        <p className="special-price"> <small>Giá: </small>25.000₫</p>
                                                                        <p className="old-price"><small>Giá: </small>27.000₫</p>
                                                                    </div>
                                                                    <div className="action">
                                                                        <form action="/cart/add" method="post" className="variants" id="product-actions-1308318" encType="multipart/form-data">
                                                                            <div className="arrival-mask">
                                                                                <a href="/sup-lo-xanh" className="btnsubmit add-cart"><span><i className="fa fa-shopping-cart" /> Mua hàng</span></a>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                                            <div className="prodimg">
                                                                <div className="sale-label sale-top-right">-
                                                                    7% <i className="fa fa-star" /></div>
                                                                <a href="/sup-lo-xanh" title="Súp lơ xanh">
                                                                    <img src="//bizweb.dktcdn.net/thumb/large/100/053/074/products/suplo.jpg?v=1457535858247" className="img-responsive" alt="Súp lơ xanh" />
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
                                                                80% <i className="fa fa-star" /></div>
                                                            <a href="/rau-thom" title="Rau thơm">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/raumuithom.jpg?v=1457536152060" className="img-responsive" alt="Rau thơm" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/rau-thom" title="Rau thơm">
                                                                <h2>Rau thơm</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>1.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>5.000₫</p>
                                                                </div>
                                                                <div className="action">
                                                                    <form action="/cart/add" method="post" className="variants" id="product-actions-1308317" encType="multipart/form-data">
                                                                        <div className="arrival-mask">
                                                                            <a href="/rau-thom" className="btnsubmit add-cart"><span><i className="fa fa-shopping-cart" /> Mua hàng</span></a>
                                                                        </div>
                                                                    </form>
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
                                                            <a href="/rau-can-xao-bo" title="Rau cần xào bò">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/raucan.jpg?v=1457541363607" className="img-responsive" alt="Rau cần xào bò" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/rau-can-xao-bo" title="Rau cần xào bò">
                                                                <h2>Rau cần xào bò</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>5.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>7.000₫</p>
                                                                </div>
                                                                <div className="action">
                                                                    <form action="/cart/add" method="post" className="variants" id="product-actions-1308315" encType="multipart/form-data">
                                                                        <div className="arrival-mask">
                                                                            <a href="/rau-can-xao-bo" className="btnsubmit add-cart"><span><i className="fa fa-shopping-cart" /> Mua hàng</span></a>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                33% <i className="fa fa-star" /></div>
                                                            <a href="/muop-huong" title="Mướp hương">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/muop.jpg?v=1457541687300" className="img-responsive" alt="Mướp hương" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/muop-huong" title="Mướp hương">
                                                                <h2>Mướp hương</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>10.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>15.000₫</p>
                                                                </div>
                                                                <div className="action">
                                                                    <form action="/cart/add" method="post" className="variants" id="product-actions-1308314" encType="multipart/form-data">
                                                                        <div className="arrival-mask">
                                                                            <a href="/muop-huong" className="btnsubmit add-cart"><span><i className="fa fa-shopping-cart" /> Mua hàng</span></a>
                                                                        </div>
                                                                    </form>
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
                                                            <a href="/bi-dao" title="Bí đao">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/bidao.jpg?v=1459130689067" className="img-responsive" alt="Bí đao" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/bi-dao" title="Bí đao">
                                                                <h2>Bí đao</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>15.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>17.000₫</p>
                                                                </div>
                                                                <div className="action">
                                                                    <form action="/cart/add" method="post" className="variants" id="product-actions-1308313" encType="multipart/form-data">
                                                                        <div className="arrival-mask">
                                                                            <a href="/bi-dao" className="btnsubmit add-cart"><span><i className="fa fa-shopping-cart" /> Mua hàng</span></a>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="prodgrid">
                                                        <div className="prodimg">
                                                            <div className="sale-label sale-top-right">-
                                                                20% <i className="fa fa-star" /></div>
                                                            <a href="/bap-cai" title="Bắp cải">
                                                                <img src="//bizweb.dktcdn.net/thumb/medium/100/053/074/products/bapcai.jpg?v=1457541971463" className="img-responsive" alt="Bắp cải" />
                                                            </a>
                                                        </div>
                                                        <div className="prodinfo">
                                                            <a href="/bap-cai" title="Bắp cải">
                                                                <h2>Bắp cải</h2>
                                                            </a>
                                                            <div className="prodaction clearfix">
                                                                <div className="pricebox">
                                                                    <p className="special-price"> <small>Giá: </small>12.000₫</p>
                                                                    <p className="old-price"><small>Giá: </small>15.000₫</p>
                                                                </div>
                                                                <div className="action">
                                                                    <form action="/cart/add" method="post" className="variants" id="product-actions-1308312" encType="multipart/form-data">
                                                                        <div className="arrival-mask">
                                                                            <a href="/bap-cai" className="btnsubmit add-cart"><span><i className="fa fa-shopping-cart" /> Mua hàng</span></a>
                                                                        </div>
                                                                    </form>
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
                                                <li className="level0 current"><a href="/rau-sach">Rau sạch</a></li>
                                                <li className="level0 "><a href="/thit-sach">Thịt sạch</a></li>
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
                                        <a href="/collections/all"><img src="//bizweb.dktcdn.net/100/053/074/themes/67956/assets/block-banner.png?1564585298508" alt="block-banner" /></a>
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