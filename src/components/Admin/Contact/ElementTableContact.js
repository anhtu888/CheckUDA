import React from 'react'

export default class ElementTableContact extends React.Component {
    onDelete = () => {
        this.props.onDelete(this.props.listContact.id);
    }
    onCheck = () => {
        this.props.onCheck(this.props.listContact.id);
    }
    render() {
        var { listContact, index } = this.props;
        return (
            <>
                <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{listContact.firstname} {listContact.lastname}</td>
                    <td className="text-center">{listContact.email}</td>
                    <td className="text-center">{listContact.title}</td>
                    <td className="text-center">{listContact.content}</td>
                    <td className="text-center">
                        <span className={listContact.active === true ? 'label label-success' : 'label label-danger'} onClick={this.onCheck}>
                            {listContact.active === true ? 'Đã xem' : 'Chưa xem'}
                        </span>
                    </td>
                    <td className="text-center">
                        &nbsp;
                                            <button type="button" className="btn btn-danger" onClick={this.onDelete}>
                            <span className="fa fa-trash"></span> Xóa
                                            </button>
                    </td>
                </tr>
            </>
        );
    }
}