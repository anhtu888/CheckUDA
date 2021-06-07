import React from 'react';
import HeaderIndex from '../Header/Index'
import Slide from '../Slide';
import FooterIndex from '../Footer/Index'
import axios from 'axios';

class Index extends React.Component {
    render() {
        return (
            <>
                <HeaderIndex />
                <Slide />
                {/* <div className="col-lg-12">
                    <form onSubmit={this.onSubmit} >
                        <div className="card" style={{ boxShadow: '5px 7px darkgrey' }}>
                            <div className="card-header">
                                <h1 style={{ textAlign: 'center' }} > <span >Thêm Sản Phẩm</span> </h1>
                            </div>
                            <div className="card-body">
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
                                            placeholder="Bảo quản"
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
                                        <input id="ngayGieoTrong" type="datetime-local"
                                            onChange={this.onChange}
                                            value={this.state.ngayGieoTrong}
                                            className=" form-control"
                                            placeholder="Ngày gieo trồng"
                                            name="ngayGieoTrong"
                                            required />
                                    </div>
                                    <div className="form-group col-4" >
                                        <label>Ngày thu hoạch <span className="text-danger">*</span> :</label>
                                        <input id="ngayThuHoach" type="datetime-local"
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
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Thêm sản phẩm </button>
                            </div>
                        </div>
                    </form >
                    <h1 className="produc-hot " style={{ textAlign: 'center', marginTop: '20px' }}><b>Danh Mục Sản Phẩm</b></h1>
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
                </div> */}
                <div style={{ marginTop: '70px' }} >
                    <FooterIndex />
                </div>
            </>


        )
    }
}
export default Index;