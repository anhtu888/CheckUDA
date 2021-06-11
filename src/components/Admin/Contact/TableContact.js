import React from 'react'
import ElementTableContact from './ElementTableContact';
export default class TableContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fiterName :''
        }
    }
    onChangeInput = (event) =>{
        // event.preventDefault();
        var target = event.target;
        var fiterName = target.name;
        var value = target.value;
        this.props.onFiter(
            fiterName === "fiterName" ? value : this.state.fiterName
        )
        this.setState({
            [fiterName] : value
        });
        
    }
    render() {
        var {listContact} = this.props;
        var element = listContact.map((item,index)=>{
            return <ElementTableContact
                        key={item.id}
                        index ={index}
                        listContact = {item}
                        onDelete = {this.props.onDelete}
                        onCheck = {this.props.onCheck}
                    />
        });
        return (
            <>
                <thead style={{ textAlign: 'left' }}>
                    <tr id="tbheader">
                        <th>STT</th>
                        <th>Họ Tên Khách hàng</th>
                        <th>Email</th>
                        <th>Chủ đề</th>
                        <th>Nội dung</th>
                        <th>Tình trạng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td colSpan="6">
                            <input
                                type="text"
                                name="fiterName"
                                placeholder="Nhập email khách hàng"
                                onChange = {this.onChangeInput} 
                                value = {this.state.fiterName}
                            />
                        </td>
                    </tr>
                    {element}
                </tbody>
            </>
        );
    }
}