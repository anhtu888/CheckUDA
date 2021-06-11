import React from 'react';
import FormItemTb from './FormItemTb';
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
            [name]:value
            
        });
        
    }
    render() {
        var {listAbout} = this.props;
        var element = listAbout.map((item, index)=>{
            return <FormItemTb 
                        key = {item.id}
                        index = {index}
                        listAbout = {item}
                        onDelete = {this.props.onDelete}
                        onUpdate = {this.props.onUpdate}
                        onUpdateActive = {this.props.onUpdateActive}
                    />
        });
        return (
            <table id="example1" className="table table-bordered table-striped">
                <thead style={{ textAlign: 'left' }}>
                    <tr id="tbheader">
                        <th>STT</th>
                        <th>Title</th>
                        <th>Summary</th>
                        <th>Hình Ảnh</th>
                        <th>Tình trạng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td colSpan="6">
                            <input
                                type="text"
                                title="fiterName"
                                placeholder="Nhập tên tìm kiếm"
                            />
                        </td>
                    </tr>
                    { element}
                    
                </tbody>
            </table>
        );
    }
}