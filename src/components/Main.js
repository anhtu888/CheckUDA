import React, { Component } from 'react';
import './Product.css';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
    onChange(event) {
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
        axios.post('http://localhost:4000/products/add', obj)
            .then(res => console.log(res.data));

        this.setState({
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
        })
    }

    render() {
        return (
            <div className="col-lg-12" style={{ boxShadow: '5px 10px #888888' }} >
                <h1 style={{ textAlign: 'center' }} > <span >Thêm Sản Phẩm</span> </h1>
                <form onSubmit={this.onSubmit} >
                    <div className="row">
                        <div className="form-group col-4" >
                            <input id="nguoiChamSoc" type="text"
                                className="form-control"
                                name="nguoiChamSoc"
                                placeholder="Người Chăm Sóc"
                                onChange={this.onChange}
                                value={this.state.nguoiChamSoc}
                            />
                        </div>
                        <div className="form-group col-4" >
                            <input id="nguoiBanSp" type="text"
                                name="nguoiBanSp"
                                onChange={this.onChange}
                                value={this.state.nguoiBanSp}
                                className="form-control "
                                placeholder="Người Bán Sản Phẩm"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input type="text"
                                name="baoQuan"
                                value={this.state.baoQuan}
                                onChange={this.onChange}
                                className=" form-control"
                                placeholder="Bảo Quản"
                                required />
                        </div>

                    </div>
                    <div className="row">
                        <div className="form-group col-4" >
                            <input id="productName" type="text"
                                ref={
                                    (input) => { this.productName = input }
                                }
                                onChange={this.onChange}
                                value={this.state.tenSanPham}
                                className=" form-control"
                                placeholder="Tên Sản Phẩm"
                                name="tenSanPham"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="productPrice" type="text"
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
                            <input type="text"
                                onChange={this.onChange}
                                value={this.state.noiTrong}
                                className=" form-control"
                                placeholder="Nơi Trồng"
                                name="noiTrong"
                                required />
                        </div>

                    </div>
                    <div className="row">
                        <div className="form-group col-4" >
                            <input id="ngayGieoTrong" type="datetime-local"
                                onChange={this.onChange}
                                value={this.state.ngayGieoTrong}
                                className=" form-control"
                                placeholder="Ngày gieo trồng"
                                name="ngayGieoTrong"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="ngayThuHoach" type="datetime-local"
                                onChange={this.onChange}
                                value={this.state.ngayThuHoach}
                                className=" form-control"
                                placeholder="Ngày Thu Hoạch"
                                name="ngayThuHoach"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="donVi" type="text"
                                onChange={this.onChange}
                                value={this.state.donVi}
                                className="form-control "
                                placeholder="Đơn vị cung cấp"
                                name="donVi"
                                required />
                        </div>

                    </div>
                    <div>
                        <div className=""> <label> Hình ảnh của sản phẩm :</label>
                            <input type="file" id="myFile" name="filename" />

                        </div>
                    </div>
                    <button type="submit"
                        className="btn btn-primary"> Thêm sản phẩm </button>
                </form >
                <h1 className="produc-hot " style={{ textAlign: 'center' }}><b>Danh Mục Sản Phẩm</b></h1>
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col" > ID</th>
                            <th scope="col" > Tên Sản Phẩm </th>
                            <th scope="col" > Gía Sản Phẩm </th>
                            <th scope="col" > Chủ Sở Hữu </th>
                            <th scope="col" >Mua</th>
                        </tr>
                    </thead>
                    <tbody id="productList" > {
                        this.props.products.map((product, key) => {
                            return (<tr key={key} >
                                <th scope="row" > {product.id.toString()} </th>
                                <td > {product.name} </td>
                                <td > {window.web3.utils.fromWei(product.price.toString(), 'Ether')}
                        VND </td>
                                <td > {product.owner} </td>
                                <td > {!product.purchased ?
                                    <button
                                        name={product.id}
                                        value={product.price}
                                        onClick={
                                            (event) => {
                                                this.props.purchaseProduct(event.target.name, event.target.value)
                                            }
                                        } >
                                        Mua </button> :
                                    null
                                } </td> </tr>
                            )
                        })
                    } </tbody>
                </table >
            </div>
        );
    }
}

export default Main;