import React from 'react';
export default class InsertAdminUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            password:'',
            fullname:'',
            sdt:'',
            email:'',
            gender:''
        }
    }
    componentWillMount(){
        if (this.props.elementEdit) {
            this.setState({
                id : this.props.elementEdit.id,
                name : this.props.elementEdit.name,
                password : this.props.elementEdit.password,
                fullname : this.props.elementEdit.fullname,
                sdt : this.props.elementEdit.sdt,
                email : this.props.elementEdit.email,
                gender : this.props.elementEdit.gender
            });
        }
    }
    componentWillReceiveProps(nextProps)
    {
        if (nextProps && nextProps.elementEdit) {
            this.setState({
                id : nextProps.elementEdit.id,
                name : nextProps.elementEdit.name,
                password : nextProps.elementEdit.password,
                fullname : nextProps.elementEdit.fullname,
                sdt : nextProps.elementEdit.sdt,
                email : nextProps.elementEdit.email,
                gender : nextProps.elementEdit.gender
            });
        }
    }
    onChangeInput =(event)=>{
        var target = event.target;
        var name = target.name;
        
        var value = target.value;
        this.setState({
            [name]:value
            

        });
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    render() {
        var {id} = this.state;
        return (
            <div className="panel panel-warning">
                <div className="">
                    <h3 className="panel-title">
                        {id === '' ? 'Thêm mới' : 'Chỉnh sửa'}
                    </h3>
                </div>
                <div className="">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Tên đăng nhập :</label>
                                    <input type="text" className="form-control" placeholder="Nhập tên đăng nhập..." value={this.state.name} name="name" onChange={this.onChangeInput}  />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                <label>Mật khẩu :</label>
                                    <input type="text" className="form-control" placeholder="******" value={this.state.password} name="password" onChange={this.onChangeInput}  />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                <label>Họ và tên :</label>
                                    <input type="text" className="form-control" placeholder="Nguyễn Văn A" value={this.state.fullname} name="fullname" onChange={this.onChangeInput}  />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                <label>Số điện thoại :</label>
                                    <input type="text" className="form-control" placeholder="092xxx" value={this.state.sdt} name="sdt" onChange={this.onChangeInput}  />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                <label>Email :</label>
                                    <input type="text" className="form-control" placeholder="xxx@gmail.com" value={this.state.email} name="email" onChange={this.onChangeInput}  />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                <label>Giới tính :</label>
                                <select className="form-control" value={this.state.gender} name="gender" onChange={this.onChangeInput}>
                                        <option>giới tính</option>
                                        <option>Nam</option>
                                        <option>Nữ</option> 
                                    </select>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCloseForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}