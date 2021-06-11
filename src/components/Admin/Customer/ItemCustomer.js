import React from 'react';
export default class ItemCustomer extends React.Component {
    onDelete = () =>{
        this.props.onDelete(this.props.listCustomer.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.listCustomer.id)
    }
    render() {
        var {listCustomer, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{listCustomer.name}</td>
                <td className="text-center">{listCustomer.fullname}</td>
                <td style = {{display:"none"}} className="text-center">{listCustomer.password}</td>               
                <td className="text-center">{listCustomer.sdt}</td>
                <td className="text-center">{listCustomer.email}</td>
                <td className="text-center">{listCustomer.gender}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning text-white" onClick={this.onUpdate}>
                        <span className="fas fa-edit"></span> Sửa
                    </button>
                                            &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash"></span> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}