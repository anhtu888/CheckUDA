import React from 'react';
import FormInsert from './FormInsert';
import FormTable from './FormTable';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAbout: [
                {
                    id : '1',
                    name : 'Trà sữa Trần Đức Bo',
                    content : 'TĐB Milktea là thương hiệu của người Việt mang hương vị và dấu ấn đơn giản, gần gũi với người Việt. Không cầu kì nhưng tinh tế là phong cách ẩm thực lẫn phong cách phục vụ của BandB nhằm mang lại cảm xúc thoải mái nhất, tuyệt vời nhất cho người trải nghiệm. Bởi vì TĐB Milktea sinh ra với sứ mệnh “Trọn vẹn cảm xúc Việt” 🍀Đối với TĐB Milktea khách',
                    active : true,
                    image : '/asset/web/images/cocsu.jpg'
                }
            ], // Khởi tạo mảng để lưu trữ danh sách element
            isHidden: false, //Kiểm tra đóng (false) / mở (true) form Insert.
            elementEdit: [], // DÙng để lưu trữ elm edit
            fiter: { //Lọc dữ liệu tìm kiếm theo tên
                name: ''
            }
        }
    }
    //Load lần đầu -> lấy data từ dưới localStorage
    componentWillMount() {
        if (localStorage && localStorage.getItem('listAbout')) {
            var listAbout = JSON.parse(localStorage.getItem('listAbout'));
            this.setState({
                listAbout: listAbout
            });
        }else{
            var {listAbout} = this.state;
            localStorage.setItem('listAbout',JSON.stringify(listAbout));
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
        var { listAbout } = this.state;
        if (data.id === '') {
            data.id = this.randomId();
            data.image = '/asset/web/images/cocsu.jpg';
            listAbout.push(data);
        } else {
            var index = this.findIndex(data.id);
            data.image = '/asset/web/images/cocsu.jpg';
            listAbout[index] = data;
        }
        this.setState({
            listAbout: listAbout,
            isHidden: false,

        });
        //Lưu vào localStorage
        localStorage.setItem('listAbout', JSON.stringify(listAbout));
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
    //Chức năng Delete
    onDelete = (id) => {
        var { listAbout } = this.state;
        var index = this.findIndex(id);
        if (index != -1) {
            listAbout.splice(index, 1);
            this.setState({
                listAbout: listAbout
            });
            localStorage.setItem('listAbout', JSON.stringify(listAbout));
        }
    }
    onUpdate = (id) => {
        var { listAbout } = this.state;
        var index = this.findIndex(id);
        var elementEdit = listAbout[index];
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
    onUpdateActive = (id) => {
        var { listAbout } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            listAbout[index].active = !listAbout[index].active
            this.setState({
                listAbout: listAbout
            });
            localStorage.setItem('listAbout', JSON.stringify(listAbout));
        }
    }
    //Tìm kiếm
    findIndex = (id) => {
        var { listAbout } = this.state;
        var result = -1;
        listAbout.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result
    }
    render() {
        var { listAbout, isHidden, elementEdit, fiter } = this.state;

        var hiddenFormInsert = isHidden ? <FormInsert
            onSubmit={this.onSubmit}
            elementEdit={elementEdit}
            onCloseForm={this.onCloseForm}
        /> : '';

        if (fiter) {
            if (fiter.name) {
                listAbout = listAbout.filter((item) => {
                    return item.name.toLowerCase().indexOf(fiter.name) !== -1;
                });
            }
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>giới thiệu</b></h3>
                        </div>
                        <button type="button" className="col-1 btn btn-primary" onClick={this.onOpenInsertForm}>
                            <span className="fa fa-plus"></span>Thêm
                        </button>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    {/* Form Thêm  */}
                                    {hiddenFormInsert}
                                </div>
                            </div>
                            {/* Form Table */}
                            <FormTable
                                listAbout={listAbout}
                                onDelete={this.onDelete}
                                onUpdate={this.onUpdate}
                                onFiter={this.onFiter} 
                                onUpdateActive = {this.onUpdateActive}
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}