import React, { Component } from "react";
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

class TableRow extends Component {
  render() {
    return (
      <>
        <div className="col-lg-4 col-md-4 all des">
          <div className="product-item">
            <a href="#">
              <img src="assets/images/i1.jpg" alt="" />
            </a>
            <div className="down-content">
                <div className="row">
                    <h4>
                        {this.props.obj.tenSanPham} - {this.props.obj.giaCa} VNĐ
                    </h4>
                </div> 
              <div className="row">
                <div className="col-8">
                  {/* <img src="/assets/images/qr.png" alt="" /> */}
                  <div>
                    <QRCode
                        id='qrcode'
                        value={"http://localhost:3000/edit/"+this.props.obj._id}
                        size={190}
                        level={'L'}
                        includeMargin={true}
                    />
                    </div>
                </div>
                <div className="col-4" style={{ position: "relative" }}>
                  {/* Button trigger modal */}
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#abc"+this.props.obj._id}
                    style={{
                      position: "absolute",
                      bottom: "20px",
                    }}
                  >
                    Chi Tiết
                  </button>
                  <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id={"abc"+this.props.obj._id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className=" modal-content">
              <div className="sp">
                <h3 style={{ color: "black", textAlign: "center", marginTop: "10px", borderBottom: "solid black 1px" }} className="modal-title" id="exampleModalLongTitle" >
                    {this.props.obj.tenSanPham}
                </h3>
              </div>
              <div className="modal-body">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Người Chăm Sóc : {this.props.obj.nguoiChamSoc}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Người Bán : {this.props.obj.nguoiBanSp}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Bảo Quản : {this.props.obj.baoQuan}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Gía Sản Phẩm : {this.props.obj.giaCa}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Nơi Trồng : {this.props.obj.noiTrong}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Ngày Gieo Trồng : {this.props.obj.ngayGieoTrong}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Ngày Thu Hoạch : {this.props.obj.ngayThuHoach}
                  </h5>
                  <h5 className="card-title sapham" style={{ lineHeight: "30px" }} >
                    Đơn Vị Cung Cấp : {this.props.obj.donVi}
                  </h5>
                </div>
              </div>
              <div style={{ borderTop: "solid black 1px" }} className="sp1">
                <button type="button" className="btn btn-primary" data-dismiss="modal" style={{ float: "right", margin: "10px" }} >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TableRow;
