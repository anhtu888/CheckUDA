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
    onChangeImage = (e)=>{
        let files = e.target.files;
        console.log(files);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
    }
    onSubmit(e) {
        e.preventDefault();
        const name = this.productName.value
        const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
        this.props.createProduct(name, price)

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
        });
        
    }

    render() {
        return (
            <div className="col-lg-8 offset-2">
                <form onSubmit={this.onSubmit} >
                    <div className="card" style={{ boxShadow: '5px 7px darkgrey' }}>
                        <div className="card-header">
                            <h1 style={{ textAlign: 'center' }} > <span >Th??m S???n Ph???m</span> </h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="form-group col-6" >
                                    <label>T??n s???n ph???m <span className="text-danger">*</span> :</label>
                                    <input id="productName" type="text"
                                        ref={
                                            (input) => { this.productName = input }
                                        }
                                        onChange={this.onChange}
                                        value={this.state.tenSanPham}
                                        className=" form-control"
                                        placeholder="Vui l??ng nh???p t??n s???n ph???m"
                                        name="tenSanPham"
                                        required />
                                </div>
                                <div className="form-group col-6" >
                                    <label>Gi?? c??? <span className="text-danger">*</span> :</label>
                                    <input id="productPrice" type="number"
                                        ref={
                                            (input) => { this.productPrice = input }
                                        }
                                        onChange={this.onChange}
                                        value={this.state.giaCa}
                                        className="form-control "
                                        name="giaCa"
                                        placeholder="G??a s???n Ph???m"
                                        required />
                                </div>
                                <div className="form-group col-6" >
                                    <label>Ng??y gieo tr???ng <span className="text-danger">*</span> :</label>
                                    <input id="ngayGieoTrong" type="date"
                                        onChange={this.onChange}
                                        value={this.state.ngayGieoTrong}
                                        className=" form-control"
                                        placeholder="Ng??y gieo tr???ng"
                                        name="ngayGieoTrong"
                                        required />
                                </div>
                                <div className="form-group col-6" >
                                    <label>Ng??y thu ho???ch <span className="text-danger">*</span> :</label>
                                    <input id="ngayThuHoach" type="date"
                                        onChange={this.onChange}
                                        value={this.state.ngayThuHoach}
                                        className=" form-control"
                                        placeholder="Ng??y Thu Ho???ch"
                                        name="ngayThuHoach"
                                        required />
                                </div>
                                <div className="form-group col-6" >
                                    <label>Ng?????i ch??m s??c :</label>
                                    <input id="nguoiChamSoc" type="text"
                                        className="form-control"
                                        name="nguoiChamSoc"
                                        placeholder="Vui l??ng ??i???n t??n"
                                        onChange={this.onChange}
                                        value={this.state.nguoiChamSoc}
                                    />
                                </div>
                                <div className="form-group col-6" >
                                    <label>Ng?????i b??n <span className="text-danger">*</span> :</label>
                                    <input id="nguoiBanSp" type="text"
                                        name="nguoiBanSp"
                                        onChange={this.onChange}
                                        value={this.state.nguoiBanSp}
                                        className="form-control "
                                        placeholder="Vui l??ng ??i???n t??n"
                                        required />
                                </div>
                                <div className="form-group col-6" >
                                    <label>????n v??? :</label>
                                    <input id="donVi" type="text"
                                        onChange={this.onChange}
                                        value={this.state.donVi}
                                        className="form-control "
                                        placeholder="????n v??? cung c???p"
                                        name="donVi"
                                    />
                                </div>
                                <div className="form-group col-6" >
                                    <label>N??i tr???ng :</label>
                                    <input type="text"
                                        onChange={this.onChange}
                                        value={this.state.noiTrong}
                                        className=" form-control"
                                        placeholder="N??i Tr???ng"
                                        name="noiTrong"
                                    />
                                </div>
                                <div className="form-group col-6" >
                                    <label>B???o qu???n :</label>
                                    {/* <input type="text"
                                        name="baoQuan"
                                        value={this.state.baoQuan}
                                        onChange={this.onChange}
                                        placeholder="B???o qu???n"
                                        className=" form-control"
                                    /> */}
                                    <textarea type="text" name="baoQuan" className=" form-control" rows="3" onChange={this.onChange}></textarea>
                                </div>
                                <div className="form-group col-6" >
                                    <label>Giai ??o???n sinh tr?????ng :</label>
                                    <textarea type="text" className=" form-control" rows="3" ></textarea>
                                </div>
                            </div>
                            <div>
                                <div className="form-group"> 
                                    <label> H??nh ???nh c???a s???n ph???m :</label>
                                    <input type="file" id="myFile" name="filename"  onChange={this.onChangeImage}/>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Th??m s???n ph???m </button>
                        </div>
                    </div>
                </form >
                <h1 className="produc-hot " style={{ textAlign: 'center', marginTop: '20px' }}><b>Danh M???c S???n Ph???m</b></h1>
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col" > ID</th>
                            <th scope="col" > T??n S???n Ph???m </th>
                            <th scope="col" > G??a S???n Ph???m </th>
                            <th scope="col" > Ch??? S??? H???u </th>
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