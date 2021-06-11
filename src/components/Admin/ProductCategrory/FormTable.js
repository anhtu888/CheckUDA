import React from 'react';
import ItemTable from './ItemTable';
export default class FormTable extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            fiterName : ''
        }
    }
    onChangeInput = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFiter(
            name === 'fiterName' ? value : this.state.fiterName
        );
        this.setState({
            [name]: value
        });
        
    }
    render() {
        var {listProductCategrory} = this.props;
        var element = listProductCategrory.map((item, index)=>{
            return <ItemTable 
                        key = {item.id}
                        index = {index}
                        listProductCategrory = {item}
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}
                    />
        });
        return (
            <table id="example1" className="table table-bordered table-striped">
                <thead style={{ textAlign: 'left' }}>
                    <tr id="tbheader">
                        <th>STT</th>
                        <th>Tên Loại Sản Phẩm</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td colSpan="2">
                            <input
                                type="text"
                                name="fiterName"
                                placeholder="Nhập tên tìm kiếm"
                                onChange = {this.onChangeInput}
                                value = {this.state.fiterName}
                            />
                        </td>
                    </tr>
                    {element}
                </tbody>
            </table>
        );
    }
}