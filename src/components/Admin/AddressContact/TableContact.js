import React from 'react'
import ElementTableContact from './ElementTableContact';
export default class TableContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fiterName :''
        }
    }
    render() {
        var {listAddress} = this.props;
        var element = listAddress.map((item,index)=>{
            return <ElementTableContact
                        key={item.id}
                        index ={index}
                        listAddress = {item}
                        onUpdate = {this.props.onUpdate}
                    />
        });
        return (
            <>
                <thead style={{ textAlign: 'left' }}>
                    <tr id="tbheader" style={{ textAlign: 'center' }}>
                        {/* <th>STT</th> */}
                        <th >Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {element}
                </tbody>
            </>
        );
    }
}