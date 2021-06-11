import React from 'react'

export default class InsertContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            address: '',
            phone: '',
            email: '',
        }
    }

    componentWillMount() {
        if (this.props.elementEdit) {
            this.setState({
                id: this.props.elementEdit.id,
                address: this.props.elementEdit.address,
                phone: this.props.elementEdit.phone,
                email: this.props.elementEdit.email,
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.elementEdit) {
            this.setState({
                id: nextProps.elementEdit.id,
                address: nextProps.elementEdit.address,
                phone: nextProps.elementEdit.phone,
                email: nextProps.elementEdit.email,
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
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    {id === '' ? 'Thêm mới' : 'Chỉnh sửa'}
                                            </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Địa chỉ :</label>
                            <input type="text" name="address" className="form-control" value={this.state.address} onChange={this.onChangeInput} placeholder="Nhập tên..." />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại :</label>
                            <input type="text" name="phone"  className="form-control" value={this.state.phone} onChange={this.onChangeInput} placeholder="Nhập title..." />
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="text" name="email"  className="form-control" value={this.state.email} onChange={this.onChangeInput} placeholder="Nhập email..." />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCloseForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}