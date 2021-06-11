import React from 'react';
import FormInsert from './FormInsert';
import FormTable from './FormTable';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [], //id,name,categrory,price,image,active
            IsHidden: false,
            elementEdit: [],
            fiter : {
                name : ''
            }
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('listProducts')) {
            var listProducts = JSON.parse(localStorage.getItem('listProducts'));
            this.setState({
                listProducts: listProducts
            });
        }
    }
    onOpenForm = () => {
        this.setState({
            IsHidden: !this.state.IsHidden,
            elementEdit: null
        });
    }
    onCloseForm = () => {
        this.setState({
            IsHidden: false,
            elementEdit: null
        });
    }
    onDelete = (id) => {
        var { listProducts } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            listProducts.splice(index, 1);
            this.setState({
                listProducts: listProducts
            });
            localStorage.setItem('listProducts', JSON.stringify(listProducts));
        }
    }
    onUpdate = (id) => {
        var { listProducts } = this.state;
        var index = this.findIndex(id);
        var eleEdit = listProducts[index];
        if (index !== -1) {
            this.setState({
                elementEdit: eleEdit,
                IsHidden: true
            });
        }
    }
    onUpdateActive = (id) =>{
        var { listProducts } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            listProducts[index].active = !listProducts[index].active
            this.setState({
                listProducts: listProducts
            });
            localStorage.setItem('listProducts', JSON.stringify(listProducts));
        }
    }
    onSubmit = (data) => {
        var { listProducts } = this.state;
        // data.active = (data.active == true ? true : false)
        if (data.id === '') {
            data.id = this.randomId();
            listProducts.push(data);
        }else{
            var index = this.findIndex(data.id);
            listProducts[index] = data;
        }
        this.setState({
            listProducts: listProducts,
            IsHidden: false
        });
        localStorage.setItem('listProducts', JSON.stringify(listProducts));
    }
    onFiter = (fiterName)=>{
        this.setState({
            fiter: {
                name : fiterName.toLowerCase()
            }
        });
    }
    //Tạo các phương thức random Id:
    //Random string
    randomString() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    //Random Id
    randomId() {
        return this.randomString() + '-' + this.randomString() + this.randomString() + '-' + this.randomString();
    }
    //Tìm kiếm theo Id
    findIndex(id) {
        var { listProducts } = this.state;
        var result = -1;
        listProducts.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        })
        return result;
    }
    render() {
        var { IsHidden, listProducts, elementEdit,fiter } = this.state;
        var elementHidden = IsHidden ? <FormInsert
            onSubmit={this.onSubmit}
            elementEdit={elementEdit}
            onCloseForm={this.onCloseForm}
        /> : '';

        if (fiter) {
            if (fiter.name) {
                listProducts = listProducts.filter((item)=>{
                    return item.name.toLowerCase().indexOf(fiter.name) !== -1;
                });
            }
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Sản Phẩm</b></h3>
                        </div>
                        <button type="button" className="col-1 btn btn-primary" onClick={this.onOpenForm}>
                            <span className="fa fa-plus"></span>Thêm
                        </button>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    {/* Form Thêm  */}
                                    {elementHidden}
                                </div>
                            </div>
                            {/* Form Table */}
                            <FormTable
                                listProducts={listProducts}
                                onDelete={this.onDelete}
                                onUpdate={this.onUpdate}
                                onUpdateActive={this.onUpdateActive}
                                onFiter = {this.onFiter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}