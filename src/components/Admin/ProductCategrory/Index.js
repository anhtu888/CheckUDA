import React from 'react';
import InsertForm from './InsertForm';
import FormTable from './FormTable';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listProductCategrory: [], // Khởi tạo mảng để lưu trữ danh sách element
            isHidden: false, //Kiểm tra đóng (false) / mở (true) form Insert.
            elementEdit: [], // DÙng để lưu trữ elm edit
            fiter : { //Lọc dữ liệu tìm kiếm theo tên
                name : ''
            }
        }
    }
    //Load lần đầu -> lấy data từ dưới localStorage
    componentWillMount() {
        if (localStorage && localStorage.getItem('listProductCategrory')) {
            var listProductCategrory = JSON.parse(localStorage.getItem('listProductCategrory'));
            this.setState({
                listProductCategrory: listProductCategrory
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
        var { listProductCategrory } = this.state;
        if (data.id === '') {
            data.id = this.randomId();
            listProductCategrory.push(data);
        } else {
            var index = this.findIndex(data.id);
            listProductCategrory[index] = data;
        }
        this.setState({
            listProductCategrory: listProductCategrory,
            isHidden: false
        });
        //Lưu vào localStorage
        localStorage.setItem('listProductCategrory', JSON.stringify(listProductCategrory));
    }
    //Chức năng Delete
    onDelete = (id) => {
        var { listProductCategrory } = this.state;
        var index = this.findIndex(id);
        if (index != -1) {
            listProductCategrory.splice(index, 1);
            this.setState({
                listProductCategrory: listProductCategrory
            });
            localStorage.setItem('listProductCategrory', JSON.stringify(listProductCategrory));
        }
    }
    //Chuc nang Update
    onUpdate = (id) => {
        var { listProductCategrory } = this.state;
        var index = this.findIndex(id);
        var elementEdit = listProductCategrory[index];
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
        var { listProductCategrory } = this.state;
        var result = -1;
        listProductCategrory.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result
    }

    render() {
        var { listProductCategrory, isHidden, elementEdit, fiter } = this.state;

        var hiddenInsertForm = isHidden ? <InsertForm
            onSubmit={this.onSubmit}
            elementEdit={elementEdit}
            onCloseForm = {this.onCloseForm}
        /> : '';

        if (fiter) {
            if (fiter.name) {
                listProductCategrory = listProductCategrory.filter((item)=>{
                    return item.name.toLowerCase().indexOf(fiter.name) !== -1;
                });
            }
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Loại Sản Phẩm</b></h3>
                        </div>
                        <button type="button" className="col-1 btn btn-primary" onClick={this.onOpenInsertForm}>
                            <span className="fa fa-plus"></span>Thêm
                        </button>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 offset-4">
                                    {/* Form Thêm  */}
                                    {hiddenInsertForm}
                                </div>
                            </div>
                            <FormTable 
                                listProductCategrory={listProductCategrory} 
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