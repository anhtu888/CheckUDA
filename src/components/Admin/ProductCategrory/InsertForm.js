import React from 'react';
export default class InsertForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:''
        }
    }
    componentWillMount(){
        if (this.props.elementEdit) {
            this.setState({
                id : this.props.elementEdit.id,
                name : this.props.elementEdit.name
            });
        }
    }
    componentWillReceiveProps(nextProps)
    {
        if (nextProps && nextProps.elementEdit) {
            this.setState({
                id : nextProps.elementEdit.id,
                name : nextProps.elementEdit.name
            });
        }
    }
    onChangeInput =(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]:value
        });
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
    }
    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    render() {
        var {id} = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id === '' ? 'Thêm mới' : 'Chỉnh sửa'}
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" placeholder="Nhập tên..." value={this.state.name} name="name" onChange={this.onChangeInput} />
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCloseForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}