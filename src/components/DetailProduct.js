// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

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
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Detail Products</h3>
                <form onSubmit={this.onSubmit}>
                <div className="row">
                                <div className="form-group col-4" >
                                    <label>Tên sản phẩm <span className="text-danger">*</span> :</label>
                                    <input id="productName" type="text"
                                        ref={
                                            (input) => { this.productName = input }
                                        }
                                        onChange={this.onChange}
                                        value={this.state.tenSanPham}
                                        className=" form-control"
                                        placeholder="Vui lòng nhập tên sản phẩm"
                                        name="tenSanPham"
                                        required />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Giá cả <span className="text-danger">*</span> :</label>
                                    <input id="productPrice" type="number"
                                        ref={
                                            (input) => { this.productPrice = input }
                                        }
                                        onChange={this.onChange}
                                        value={this.state.giaCa}
                                        className="form-control "
                                        name="giaCa"
                                        placeholder="Gía sản Phẩm"
                                        required />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Bảo quản :</label>
                                    <input type="text"
                                        name="baoQuan"
                                        value={this.state.baoQuan}
                                        onChange={this.onChange}
                                        className=" form-control"
                                         />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Người chăm sóc :</label>
                                    <input id="nguoiChamSoc" type="text"
                                        className="form-control"
                                        name="nguoiChamSoc"
                                        placeholder="Vui lòng điền tên"
                                        onChange={this.onChange}
                                        value={this.state.nguoiChamSoc}
                                    />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Người bán <span className="text-danger">*</span> :</label>
                                    <input id="nguoiBanSp" type="text"
                                        name="nguoiBanSp"
                                        onChange={this.onChange}
                                        value={this.state.nguoiBanSp}
                                        className="form-control "
                                        placeholder="Vui lòng điền tên"
                                        required />
                                </div>
                                
                                
                                <div className="form-group col-4" >
                                    <label>Nơi trồng :</label>
                                    <input type="text"
                                        onChange={this.onChange}
                                        value={this.state.noiTrong}
                                        className=" form-control"
                                        placeholder="Nơi Trồng"
                                        name="noiTrong"
                                         />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Ngày gieo trồng <span className="text-danger">*</span> :</label>
                                    <input id="ngayGieoTrong" type="text"
                                        onChange={this.onChange}
                                        value={this.state.ngayGieoTrong}
                                        className=" form-control"
                                        placeholder="Ngày gieo trồng"
                                        name="ngayGieoTrong"
                                        required />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Ngày thu hoạch <span className="text-danger">*</span> :</label>
                                    <input id="ngayThuHoach" type="text"
                                        onChange={this.onChange}
                                        value={this.state.ngayThuHoach}
                                        className=" form-control"
                                        placeholder="Ngày Thu Hoạch"
                                        name="ngayThuHoach"
                                        required />
                                </div>
                                <div className="form-group col-4" >
                                    <label>Đơn vị :</label>
                                    <input id="donVi" type="text"
                                        onChange={this.onChange}
                                        value={this.state.donVi}
                                        className="form-control "
                                        placeholder="Đơn vị cung cấp"
                                        name="donVi"
                                         />
                                </div>

                            </div>
                            <div>
                                <div className=""> <label> Hình ảnh của sản phẩm :</label>
                                    <input type="file" id="myFile" name="filename" />
                                </div>
                            </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}