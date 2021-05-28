import React, { Component } from 'react';
import Footer from './Footer';
import Menu from './TrangChu/Menu';


class Qrcode extends Component {

    render() {
        return (
            <div>
                <header>
                    <Menu />

                    {/* header inner */}
                    <div className="container fluid">
                        <div className="row produc-sp" >
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <h1 className=" produc-hot">Chi Tiết Của Sản Phẩm</h1>
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: '30px' }}>
                            <div className="col-xl-3 col-lg-4  card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="image/images/spp.1png.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title" style={{ textAlign: 'center' }}>Dưa Hấu</h4>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4  card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h4 className="card-title sapham">Người Chăm Sóc : Anh Tú</h4>
                                    <h4 className="card-title sapham">Người Bán : Mai Tiến</h4>
                                    <h4 className="card-title sapham">Bảo Quản : 20 độ C</h4>
                                    <h4 className="card-title sapham">Tên Sản Phẩm :Dưa Hấu</h4>
                                    <h4 className="card-title sapham">Gía Sản Phẩm :20$</h4>
                                    <h4 className="card-title sapham">Nơi Trồng :Đà Nẵng</h4>
                                    <h4 className="card-title sapham">Ngày Gieo Trồng :23/3/2021</h4>
                                    <h4 className="card-title sapham">Ngày Thu Hoạch :15/5/2021</h4>
                                    <h4 className="card-title sapham">Đơn Vị Cung Cấp : Công Ty UDA</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4  card" style={{ width: '18rem' }}>
                                <div className="card-body">
                                    <h4 className="card-title sapham">Quét mã QR code :</h4>
                                    <div style={{ width: '300px', height: '300px', border: 'solid black 2px' }}>
                                        <img className src="image/images/qr.png" alt="Card image cap" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <footr>
                        <Footer />
                    </footr>
                </header></div>
        );
    }
}

export default Qrcode;