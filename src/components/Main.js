import React, { Component } from 'react';
import './Product.css'

class Main extends Component {

    render() {
        return (
            <div className="col-lg-12" >
                <h1 style={{ textAlign: 'center' }} > <span >Thêm Sản Phẩm</span> </h1>
                <form onSubmit={
                    (event) => {
                        event.preventDefault()
                        const name = this.productName.value
                        const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                        this.props.createProduct(name, price)
                    }
                } >
                    <div className="row">
                        <div className="form-group col-4" >
                            <input id="productName" type="text"

                                className=" form-control"
                                placeholder="Người Chăm Sóc"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="productPrice" type="text"

                                className="form-control "
                                placeholder="Người Bán Sản Phẩm"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input type="text"

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
                                className=" form-control"
                                placeholder="Tên Sản Phẩm"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="productPrice" type="text"
                                ref={
                                    (input) => { this.productPrice = input }
                                }
                                className="form-control "
                                placeholder="Gía sản Phẩm"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input type="text"

                                className=" form-control"
                                placeholder="Nơi Trồng"
                                required />
                        </div>

                    </div>
                    <div className="row">
                        <div className="form-group col-4" >
                            <input id="" type="datetime-local"

                                className=" form-control"
                                placeholder="Ngày gieo trồng"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="" type="datetime-local"

                                className=" form-control"
                                placeholder="Ngày Thu Hoạch"
                                required />
                        </div>
                        <div className="form-group col-4" >
                            <input id="" type="text"

                                className="form-control "
                                placeholder="Đơn vị cung cấp"
                                required />
                        </div>

                    </div>
                    <div>
                        <div className=""> <label> Hình ảnh của sản phẩm :</label>
                            <form action="/action_page.php"> <input type="file" id="myFile" name="filename" /> </form>
                            <div style={{ width: '200px', height: '300px', border: 'solid 1px' }}> </div>
                        </div>
                    </div>
                    <button type="submit"
                        className="btn btn-primary"  > Thêm sản phẩm </button>
                </form >
                <h1 className="produc-hot " style={{ textAlign: 'center' }}><b>Danh Mục Sản Phẩm</b></h1>
                <table className="table" >
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