// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';
import Menu from './TrangChu/Menu';
import Footer from './Footer';

export default class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tenSanPham: '',
            giaCa: '',
            nguoiChamSoc: '',
            nguoiBanSp: '',
            baoQuan: '',
            noiTrong: '',
            ngayGieoTrong: '',
            ngayThuHoach: '',
            donVi: '',
            hinhAnh: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/products/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    tenSanPham: response.data.tenSanPham,
                    giaCa: response.data.giaCa,
                    nguoiChamSoc: response.data.nguoiChamSoc,
                    nguoiBanSp: response.data.nguoiBanSp,
                    baoQuan: response.data.baoQuan,
                    noiTrong: response.data.noiTrong,
                    ngayGieoTrong: response.data.ngayGieoTrong,
                    ngayThuHoach: response.data.ngayThuHoach,
                    donVi: response.data.donVi,
                    hinhAnh: response.data.hinhAnh
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            tenSanPham: this.state.tenSanPham,
            giaCa: this.state.giaCa,
            nguoiChamSoc: this.state.nguoiChamSoc,
            nguoiBanSp: this.state.nguoiBanSp,
            baoQuan: this.state.baoQuan,
            noiTrong: this.state.noiTrong,
            ngayGieoTrong: this.state.ngayGieoTrong,
            ngayThuHoach: this.state.ngayThuHoach,
            donVi: this.state.donVi,
            hinhAnh: this.state.hinhAnh
        };
        axios.post('http://localhost:4000/products/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div>
                {/* <Menu /> */}
                <div>
                    <div className="page-heading products-heading header-text">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-content">
                                        <h4>????ng ?? Check</h4>
                                        <h2>XO??I</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div>
                            <h4 style={{ textAlign: 'center', marginTop: '20px' }}>Ng?????i ch??m s??c : Nguy???n ?????i Mai Ti???n</h4>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Giai ??o???n Sinh Tr?????ng</h5>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h6 style={{ lineHeight: '35px' }}>Gieo h???t &nbsp; &nbsp; &nbsp;&nbsp; <span>: 3-5-2021</span> </h6>
                            <h6 style={{ lineHeight: '35px' }}>C??y non &nbsp; &nbsp; &nbsp;&nbsp; <span>: 10-5-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Nu??i qu??? &nbsp; &nbsp; &nbsp;&nbsp; <span>: 15-5-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Th??? ph???n &nbsp; &nbsp; &nbsp;&nbsp; <span>: 25-5-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Tuy???n tr??i &nbsp; &nbsp; &nbsp;&nbsp; <span>: 5-6-2021</span></h6>
                            <h6 style={{ lineHeight: '35px' }}>Thu Ho???ch &nbsp; &nbsp; &nbsp;&nbsp; <span>: 8-7-2021</span></h6>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>B???o Qu???n</h5>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <h6 style={{ lineHeight: '35px' }}>5-10 ?????(C) &nbsp; &nbsp; &nbsp;&nbsp;:13-15 ng??y </h6>
                            <h6 style={{ lineHeight: '35px' }}>10-15 ?????(C) &nbsp; &nbsp; &nbsp;&nbsp;:7-10 ng??y </h6>
                            <h6 style={{ lineHeight: '35px' }}>15-20 ?????(C) &nbsp; &nbsp; &nbsp;&nbsp;:5-7 ng??y </h6>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>Ch???ng Ch???-Ch???ng Nh??n</h5>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <p style={{ lineHeight: '35px' }}>S??? ch???ng nh???n UDA</p>
                            <h6 style={{ lineHeight: '35px' }}>UDA-0021</h6>
                            <p style={{ lineHeight: '35px' }}>Ch???ng ch??? UDA</p>
                            <h6 style={{ lineHeight: '35px' }}>UDA Xo??i</h6>
                        </div>
                        <div style={{ width: '100%', height: '50px', backgroundColor: 'green', marginTop: '20px' }}>
                            <h5 style={{ textAlign: 'center', paddingTop: '10px', color: 'white' }}>N??i Tr???ng : Thu???c trang tr???i ?????i h???c ????ng ?? (UDA)</h5>
                        </div>
                    </div>
                </div>
                {/* <footr>
                    <Footer />
                </footr> */}
            </div>
        )
    }
}