import React from 'react'
export default class Index extends React.Component {
    render() {
        return (
            <>
                <section className="special-menu bg-skeen home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="icon-default icon-skeen">
                        <img src="asset/web/images//scroll-arrow.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="build-title">
                            <h1>Sản Phẩm Của Chúng Tôi</h1>
                            <h4>Những sản phẩm của chúng tôi sẻ cho bạn biết chính xác nhất về nguồn gốc và xuất xứ của sản phẩm</h4>
                        </div>
                        <div className="menu-wrapper">
                            <div className="portfolioFilter">
                                <div className="portfolioFilter-inner">
                                    <a href="javascript:;" data-filter="*" className="current">Tất Cả</a>
                                    <a href="javascript:;" data-filter=".breakfast">Mới Nhất</a>
                                    <a href="javascript:;" data-filter=".dessert">Trái Cây</a>
                                    <a href="javascript:;" data-filter=".dinner">Củ Qủa</a>
                                    <a href="javascript:;" data-filter=".freshfood">Có Hạt</a>
                                    <a href="javascript:;" data-filter=".lunch">Bảo quản lâu</a>
                                </div>
                            </div>
                            <div className="portfolioContainer row">
                                <div className="col-md-6 col-sm-6 col-xs-12 isotope-item breakfast">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="asset/web/images/d1.png" alt="" />
                                        </span>
                                        <h5>DƯA <span><button className="btn btn-info">Xem Chi
                  Tiết</button></span></h5>
                                        <div className="row" style={{ position: 'relative' }}>
                                            <div className="col-md-8">
                                                <div><img className="qr" style={{ maxWidth: '55%' }} src="asset/web/images/qr.png" alt="" /></div>
                                            </div>
                                            <div className="col-md-4" style={{ position: 'absolute', right: '0%', bottom: '20px' }}>
                                                <button className="btn btn-info">Mua Hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 isotope-item lunch">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="asset/web/images/d2.png" alt="" />
                                        </span>
                                        <h5>XOÀI <span><button className="btn btn-info">Xem Chi
                  Tiết</button></span></h5>
                                        <div className="row" style={{ position: 'relative' }}>
                                            <div className="col-md-8">
                                                <div><img className="qr" style={{ maxWidth: '55%' }} src="asset/web/images/qr.png" alt="" /></div>
                                            </div>
                                            <div className="col-md-4" style={{ position: 'absolute', right: '0%', bottom: '20px' }}>
                                                <button className="btn btn-info">Mua Hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 isotope-item dessert">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="asset/web/images/d3.png" alt="" />
                                        </span>
                                        <h5>ỔI <span><button className="btn btn-info">Xem Chi
                  Tiết</button></span></h5>
                                        <div className="row" style={{ position: 'relative' }}>
                                            <div className="col-md-8">
                                                <div><img className="qr" style={{ maxWidth: '55%' }} src="asset/web/images/qr.png" alt="" /></div>
                                            </div>
                                            <div className="col-md-4" style={{ position: 'absolute', right: '0%', bottom: '20px' }}>
                                                <button className="btn btn-info">Mua Hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 isotope-item dinner">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="asset/web/images/d4.png" alt="" />
                                        </span>
                                        <h5>CHÔM CHÔM <span><button className="btn btn-info">Xem Chi
                  Tiết</button></span></h5>
                                        <div className="row" style={{ position: 'relative' }}>
                                            <div className="col-md-8">
                                                <div><img className="qr" style={{ maxWidth: '55%' }} src="asset/web/images/qr.png" alt="" /></div>
                                            </div>
                                            <div className="col-md-4" style={{ position: 'absolute', right: '0%', bottom: '20px' }}>
                                                <button className="btn btn-info">Mua Hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 isotope-item freshfood">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="asset/web/images/d5.png" alt="" />
                                        </span>
                                        <h5>MĂNG CỤT <span><button className="btn btn-info">Xem Chi
                  Tiết</button></span></h5>
                                        <div className="row" style={{ position: 'relative' }}>
                                            <div className="col-md-8">
                                                <div><img className="qr" style={{ maxWidth: '55%' }} src="asset/web/images/qr.png" alt="" /></div>
                                            </div>
                                            <div className="col-md-4" style={{ position: 'absolute', right: '0%', bottom: '20px' }}>
                                                <button className="btn btn-info">Mua Hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12 isotope-item freshfood">
                                    <div className="menu-list">
                                        <span className="menu-list-product">
                                            <img src="asset/web/images/d6.png" alt="" />
                                        </span>
                                        <h5>SẦU RIÊNG <span><button className="btn btn-info">Xem Chi
                  Tiết</button></span></h5>
                                        <div className="row" style={{ position: 'relative' }}>
                                            <div className="col-md-8">
                                                <div><img className="qr" style={{ maxWidth: '55%' }} src="asset/web/images/qr.png" alt="" /></div>
                                            </div>
                                            <div className="col-md-4" style={{ position: 'absolute', right: '0%', bottom: '20px' }}>
                                                <button className="btn btn-info">Mua Hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="btn-outer">
                                <a href="#" className="btn-main btn-shadow">Xem Thêm Sản Phẩm</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="float-main">
                        <div className="icon-top-left">
                            <img src="/images/icon7.png" alt="" />
                        </div>
                        <div className="icon-bottom-left">
                            <img src="/images/icon8.png" alt="" />
                        </div>
                        <div className="icon-top-right">
                            <img src="/images/icon9.png" alt="" />
                        </div>
                        <div className="icon-bottom-right">
                            <img src="/images/icon10.png" alt="" />
                        </div>
                    </div>
                </section>



            </>
        )
    }
}