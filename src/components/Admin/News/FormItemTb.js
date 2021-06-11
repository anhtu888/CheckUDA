import React from 'react';
import swal from 'sweetalert';
export default class FormItemTb extends React.Component {
    onDelete = () => {
        swal({
            title: "Bạn có thực sự muốn xóa?",
            text: "Nếu xóa, dữ liệu sẽ không thể khôi phục!",
            icon: "warning",
            buttons: true,
            // dangerMode : true
        }).then(willDelete => {
            if (willDelete) {
                this.props.onDelete(this.props.listNew.id)
            }
        }
        );
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.listNew.id)
    }
    onUpdateActive = () => {
        this.props.onUpdateActive(this.props.listNew.id)
    }
    render() {
        var { listNew, index } = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{listNew.name}</td>

                <td className="text-center">{listNew.summary}</td>
                <td className="text-center">
                    <img src={listNew.image} alt="" style={{ height: '250px' }, { width: '250px' }} />
                </td>
                <td className="text-center">
                    <span className={listNew.active === true ? 'label label-success' : 'label label-danger'} onClick={this.onUpdateActive}>
                        {listNew.active === true ? 'Hiện' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning text-white" onClick={this.onUpdate}>
                        <span className="fas fa-edit"></span> Sửa
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                        <span className="fa fa-trash"></span> Xóa
                    </button>
                </td>
            </tr>

        );
    }
}