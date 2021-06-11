import React from 'react';
export default class FormItemTb extends React.Component {
    onDelete = () =>{
        this.props.onDelete(this.props.listAbout.id)
    }
    onUpdate = () =>{
        this.props.onUpdate(this.props.listAbout.id)
    }
    onUpdateActive = () => {
        this.props.onUpdateActive(this.props.listAbout.id)
    }
    render() {
        var {listAbout, index} = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{listAbout.name}</td>
                <td className="text-center">
                      <textarea className="form-control" name="" id="" rows="3" defaultValue={listAbout.content}></textarea>
                </td>                         
                <td className="text-center" >
                    <img src={listAbout.image}  style={{width:'300px'}} alt=""/>
                </td>
                <td className="text-center">
                <span className={listAbout.active === true ? 'label label-success' : 'label label-danger'} onClick={this.onUpdateActive}>
                        {listAbout.active === true  ? 'Hiện' : 'Ẩn'}
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