import React from 'react'

export default class ElementTableContact extends React.Component {
    onUpdate = () =>{
        this.props.onUpdate(this.props.listAddress.id)
        //alert(this.props.listAddress.id)
    }
    render() {
        var { listAddress, index } = this.props;
        return (
            <>
                <tr>
                    {/* <td className="text-center">{index + 1}</td> */}
                    <td className="text-center">{listAddress.address}</td>
                    <td className="text-center">{listAddress.phone}</td>
                    <td className="text-center">{listAddress.email}</td>

                    <td className="text-center">
                     <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                            <span className="fas fa-edit"></span> Sửa</button>
                    </td>
                </tr>
            </>
        );
    }
}