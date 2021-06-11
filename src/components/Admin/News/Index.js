import React from 'react';
import FormInsert from './FormInsert';
import FormTable from './FormTable';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listNew: [], // Khởi tạo mảng để lưu trữ danh sách element
            isHidden: false, //Kiểm tra đóng (false) / mở (true) form Insert.
            elementEdit: [], // DÙng để lưu trữ elm edit
            fiter: { //Lọc dữ liệu tìm kiếm theo tên
                name: ''
            }
        }
    }
    //Load lần đầu -> lấy data từ dưới localStorage
    componentWillMount() {
        if (localStorage && localStorage.getItem('listNew')) {
            var listNew = JSON.parse(localStorage.getItem('listNew'));
            this.setState({
                listNew: listNew
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
    onCloseForm = () => {
        this.setState({
            isHidden: false,
            elementEdit: null
        });
    }
    //Lấy data từ form Insert
    onSubmit = (data) => {
        var { listNew } = this.state;
        if (data.id === '') {
            data.id = this.randomId();
            data.image = '/asset/web/images/tt-6.png';
            listNew.push(data);
        }
        else {
            var index = this.findIndex(data.id);
            listNew[index] = data;
            data.image = '/asset/web/images/tt-6.png';
        }

        this.setState({
            listNew: listNew,
            isHidden: false
        });
        //Lưu vào localStorage
        localStorage.setItem('listNew', JSON.stringify(listNew));
    }
    //Chức năng Delete
    onDelete = (id) => {
        var { listNew } = this.state;
        var index = this.findIndex(id);
        if (index != -1) {
            listNew.splice(index, 1);
            this.setState({
                listNew: listNew
            });
            localStorage.setItem('listNew', JSON.stringify(listNew));
        }
    }
    //Chuc nang Update
    onUpdate = (id) => {
        var { listNew } = this.state;
        var index = this.findIndex(id);
        var elementEdit = listNew[index];
        if (index != -1) {
            this.setState({
                elementEdit: elementEdit,

            });
        }
        //Mở form Insert <=> Update
        this.setState({
            isHidden: true
        });
    }

    onUpdateActive = (id) => {
        var { listNew } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            listNew[index].active = !listNew[index].active
            this.setState({
                listNew: listNew
            });
            localStorage.setItem('listNew', JSON.stringify(listNew));
        }
        //alert("cgacvas");
    }
    //Chức năng Tìm kiếm theo tên
    onFiter = (fiterName) => {
        this.setState({
            fiter: {
                name: fiterName.toLowerCase()
            }
        });
        //console.log(this.state.fiter)
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
        var { listNew } = this.state;
        var result = -1;
        listNew.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result
    }
    render() {
        var { listNew, isHidden, elementEdit, fiter } = this.state;

        var hiddenInsertNew = isHidden ? <FormInsert
            onSubmit={this.onSubmit}
            elementEdit={elementEdit}
            onCloseForm={this.onCloseForm}
        /> : '';

        if (fiter) {
            if (fiter.name) {
                listNew = listNew.filter((item) => {
                    return item.name.toLowerCase().indexOf(fiter.name) !== -1;
                });
            }
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Tin tức</b></h3>
                        </div>
                        <button type="button" className="col-1 btn btn-primary" onClick={this.onOpenInsertForm}>
                            <span className="fa fa-plus"></span>Thêm
                        </button>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    {/* Form Thêm  */}
                                    {hiddenInsertNew}
                                </div>
                            </div>
                            {/* Form Table */}
                            <FormTable
                                listNew={listNew}
                                onDelete={this.onDelete}
                                onUpdate={this.onUpdate}
                                onUpdateActive={this.onUpdateActive}
                                onFiter={this.onFiter} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}