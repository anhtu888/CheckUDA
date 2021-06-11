import React from 'react';
import InsertCustomer from './InsertCustomer';
import TableCustomer from './TableCustomer';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listCustomer: [], // Khởi tạo mảng để lưu trữ danh sách element
            isHidden: false, //Kiểm tra đóng (false) / mở (true) form Insert.
            elementEdit: [], // DÙng để lưu trữ elm edit
            fiter : { //Lọc dữ liệu tìm kiếm theo tên
                name : ''
            }
        }
    }
    //Load lần đầu -> lấy data từ dưới localStorage
    componentWillMount() {
        if (localStorage && localStorage.getItem('listCustomer')) {
            var listCustomer = JSON.parse(localStorage.getItem('listCustomer'));
            this.setState({
                listCustomer: listCustomer
            });
        }
    }
    //Mở form Insert
    onOpenInsertForm = () => {
        this.setState({
            isHidden: !this.state.isHidden,
            elementEdit: null
        });
    }
    //Đóng form Insert
    onCloseForm = () =>{
        this.setState({
            isHidden: false,
            elementEdit: null
        });
    }
    //Lấy data từ form Insert
    onSubmit = (data) => {
        var { listCustomer } = this.state;
        if (data.id === '') {
            data.id = this.randomId();
            listCustomer.push(data);
        } else {
            var index = this.findIndex(data.id);
            listCustomer[index] = data;
        }
        this.setState({
            listCustomer: listCustomer,
            isHidden: false
        });
        //Lưu vào localStorage
        localStorage.setItem('listCustomer', JSON.stringify(listCustomer));
    }
    //Chức năng Delete
    onDelete = (id) => {
        var { listCustomer } = this.state;
        var index = this.findIndex(id);
        if (index != -1) {
            listCustomer.splice(index, 1);
            this.setState({
                listCustomer: listCustomer
            });
            localStorage.setItem('listCustomer', JSON.stringify(listCustomer));
        }
    }
    //Chuc nang Update
    onUpdate = (id) => {
        var { listCustomer } = this.state;
        var index = this.findIndex(id);
        var elementEdit = listCustomer[index];
        if (index != -1) {
            this.setState({
                elementEdit: elementEdit
            });
        }
        //Mở form Insert <=> Update
        this.setState({
            isHidden: true
        });
    }
    //Chức năng Tìm kiếm theo tên
    onFiter = (fiterName) =>{
        this.setState({
            fiter :{
                name : fiterName.toLowerCase()
            }
        });
        console.log(this.state.fiter)
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
    //Tìm kiếm
    findIndex = (id) => {
        var { listCustomer } = this.state;
        var result = -1;
        listCustomer.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result
    }

    render() {
        var { listCustomer, isHidden, elementEdit, fiter } = this.state;

        var hiddenInsertCustomer = isHidden ? <InsertCustomer
            onSubmit={this.onSubmit}
            elementEdit={elementEdit}
            onCloseForm = {this.onCloseForm}
        /> : '';

        if (fiter) {
            if (fiter.name) {
                listCustomer = listCustomer.filter((item)=>{
                    return item.name.toLowerCase().indexOf(fiter.name) !== -1;
                });
            }
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Tài khoảng khách hàng</b></h3>
                        </div>
                        <button type="button" className="col-1 btn btn-primary" onClick={this.onOpenInsertForm}>
                            <span className="fa fa-plus"></span>Thêm
                        </button>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 offset-12">
                                    {/* Form Thêm  */}
                                    {hiddenInsertCustomer}
                                </div>
                            </div>
                            <TableCustomer 
                                listCustomer={listCustomer} 
                                onDelete={this.onDelete} 
                                onUpdate={this.onUpdate} 
                                onFiter = {this.onFiter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}