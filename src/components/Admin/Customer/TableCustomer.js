import React from 'react';
import ItemCustomer from './ItemCustomer';
export default class TableCustomer extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            fiterName : ''
        }
    }
    onChangeInput = (event) =>{
        var target = event.target;
        var name = target.name;
        
        var value = target.value;
        this.props.onFiter(
            name === 'fiterName' ? value : this.state.fiterName
        );
        this.setState({
            [name]:value
            
        });
        
    }
    render() {
        var {listCustomer} = this.props;
        var element = listCustomer.map((item, index)=>{
            return <ItemCustomer 
                        key = {item.id}
                        index = {index}
                        listCustomer = {item}
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}
                    />
        });
        return (
            <table id="example1" className="table table-bordered table-striped">
                <thead style={{ textAlign: 'left' }}>
                    <tr id="tbheader">
                        <th>STT</th>
                        <th>Tên Đăng nhập</th>
                        <th>Tên Khách hàng</th>
                        <th style = {{display:"none"}}>password</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td colSpan="6">
                            <input
                                type="text"
                                name="fiterName"
                                placeholder="Tìm kiếm tài khoảng theo tên đăng nhập"
                                onChange = {this.onChangeInput}
                                value = {this.state.fiterName}
                            />
                        
                        </td>
                    </tr>
                    {element}
                </tbody>
            </table>
        );
    }
}