import React, { Component } from "react";
import Menu from "./TrangChu/Menu";
import axios from 'axios';
import TableRow from './TableRow';
import Footer from "./Footer";

class Producsp extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }
  componentDidMount() {
    axios.get('http://localhost:4000/products')
        .then(response => {
            console.log(response.data);
            this.setState({products: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })
  }
  tabRow() {
      return this.state.products.map(function (object, i) {
          return <TableRow obj={object} key={i}/>;
      });
  }
  render() {
    return (
      <>
        <header>
          <Menu />
        </header>
        <div>
          {/* Page Content */}
          <div className="page-heading products-heading header-text">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-content">
                    <h4>Đông Á Check</h4>
                    <h2>Danh Sách Các Sản Phẩm</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="filters">
                    <ul>
                      <li className="active" data-filter="*">
                        Tất cả sản Phẩm
                      </li>
                      <li data-filter=".des">Mới nhất</li>
                      <li data-filter=".dev">Bảo Quản Lâu</li>
                      <li data-filter=".gra">Bảo Quản Nhanh</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="filters-content">
                    <div className="row grid">
                      {this.tabRow()}
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-12">
                  <ul className="pages">
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          
        </div>
        <Footer/>
      </>
    );
  }
}
export default Producsp;
