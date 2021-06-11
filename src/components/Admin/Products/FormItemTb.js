import React from 'react';
export default class FormItemTb extends React.Component {
    onDelete = () =>{
        this.props.onDelete(this.props.listProducts.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.listProducts.id)
    }
    onUpdateActive = () =>{
        this.props.onUpdateActive(this.props.listProducts.id)
    }
    render() {
        var { listProducts, index } = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="">{listProducts.categroryName}</td>
                <td className="">{listProducts.name}</td>
                <td className="text-center">
                    <img src={listProducts.image} alt="imgProduct" style={{width:'100px'}}/>
                </td>
                <td className="text-center">{listProducts.price}</td>
                <td className="text-center">
                    <span className={listProducts.active === true ? 'label label-success' : 'label label-danger'} onClick={this.onUpdateActive}>
                        {listProducts.active === true  ? 'Hiện' : 'Ẩn'}
                    </span>
                </td>
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