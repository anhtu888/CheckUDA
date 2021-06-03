import React, { Component } from 'react';
import Footer from './Footer';
import Menu from './TrangChu/Menu';


class Qrcode extends Component {

    render() {
        return (
            <div>
                <Menu />


                <div>
                    <div className="page-heading products-heading header-text">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-content">
                                        <h4>Đông Á Check</h4>
                                        <h2>XOÀI</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div>
                            <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Người chăm sóc : Nguyễn Đại Mai Tiến</h4>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Giai Đoạn Sinh Trưởng</h5>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h6 style={{ lineHeight: '35px' }}>Gieo hạt &nbsp; &nbsp; &nbsp;&nbsp; <span>: 3-5-2021</span> </h6>
                            <h6 style={{ lineHeight: '35px' }}>Cây non &nbsp; &nbsp; &nbsp;&nbsp; <span>: 10-5-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Nuôi quả &nbsp; &nbsp; &nbsp;&nbsp; <span>: 15-5-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Thụ phấn &nbsp; &nbsp; &nbsp;&nbsp; <span>: 25-5-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Tuyển trái &nbsp; &nbsp; &nbsp;&nbsp; <span>: 5-6-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Thu Hoạch &nbsp; &nbsp; &nbsp;&nbsp; <span>: 8-7-2021</span></h6>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Bảo Quản</h5>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h6 style={{ lineHeight: '35px' }}>5-10 Độ(C) &nbsp; &nbsp; &nbsp;&nbsp;:13-15 ngày </h6>
                            <h6 style={{ lineHeight: '35px' }}>10-15 Độ(C) &nbsp; &nbsp; &nbsp;&nbsp;:7-10 ngày </h6>
                            <h6 style={{ lineHeight: '35px' }}>15-20 Độ(C) &nbsp; &nbsp; &nbsp;&nbsp;:5-7 ngày </h6>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Chứng Chỉ-Chứng Nhân</h5>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <p style={{ lineHeight: '35px' }}>Số chứng nhận UDA</p>
                            <h6 style={{ lineHeight: '35px' }}>UDA-0021</h6>
                            <p style={{ lineHeight: '35px' }}>Chứng chỉ UDA</p>
                            <h6 style={{ lineHeight: '35px' }}>UDA Xoài</h6>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Nơi Trồng : Thuộc trang trại đại học Đông Á (UDA)</h5>
                        </div>
                    </div>
                </div>


                <footr>
                    <Footer />
                </footr>
            </div>
        );
    }
}

export default Qrcode;