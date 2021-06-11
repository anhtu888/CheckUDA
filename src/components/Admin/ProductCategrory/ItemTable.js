import React from 'react';
export default class ItemTable extends React.Component {
    onDelete = () =>{
        this.props.onDelete(this.props.listProductCategrory.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.listProductCategrory.id)
    }
    render() {
        var {listProductCategrory, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{listProductCategrory.name}</td>
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