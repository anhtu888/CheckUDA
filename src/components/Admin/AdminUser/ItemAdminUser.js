import React from 'react';
export default class ItemAdminUser extends React.Component {
    onDelete = () =>{
        this.props.onDelete(this.props.listAdminUser.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.listAdminUser.id)
    }
    render() {
        var {listAdminUser, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{listAdminUser.name}</td>
                <td className="text-center">{listAdminUser.fullname}</td>
                <td style = {{display:"none"}} className="text-center">{listAdminUser.password}</td>               
                <td className="text-center">{listAdminUser.sdt}</td>
                <td className="text-center">{listAdminUser.email}</td>
                <td className="text-center">{listAdminUser.gender}</td>
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