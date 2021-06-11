import React from 'react';
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css"; // import styles

// Import bootstrap(v3 or v4) dependencies
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";
import "bootstrap/js/dist/modal";

import "bootstrap/dist/css/bootstrap.css";


export default class FormInsert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            content: '',
            image: '',
            active: true
        }
    }
    onChange = (content) => {
        console.log(content);
        this.setState({
            content : content
        });
      }
    componentWillMount() {
        if (this.props.elementEdit) {
            this.setState({
                id: this.props.elementEdit.id,
                name: this.props.elementEdit.name,
                content: this.props.elementEdit.content,
                image: this.props.elementEdit.image,
                active: this.props.elementEdit.active
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.elementEdit) {
            this.setState({
                id: nextProps.elementEdit.id,
                name: nextProps.elementEdit.name,
                content: nextProps.elementEdit.content,
                image: nextProps.elementEdit.image,
                active: nextProps.elementEdit.active
            });
        }
    }
    onChangeInput = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'active') {
            value = target.value === "true" ? true : false;
        } else {
            value = target.value;
        }
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)

    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }

    render() {
        var { id } = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id === '' ? 'Add' : 'Edit'}
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Tên tiêu đề :</label>
                                    <input type="text" name="name" className="form-control" placeholder="Nhập tên tiêu đề..." onChange={this.onChangeInput} value={this.state.name} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Tình trạng :</label>
                                    <select className="form-control" name="active" value={this.state.active} onChange={this.onChangeInput}>
                                        <option value={true}>Hiện</option>
                                        <option value={false}>Ẩn</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* <div className="form-group">
                                    <label>Summary :</label>
                                    <textarea type="text" id="mySummary" className="form-control" name="summary" rows="3"  placeholder="Nhập nội dung..." onChange={this.onChangeInput}></textarea>
                                </div> */}
                                <ReactSummernote
                                    value={this.state.content}
                                    options={{
                                        height: 200,
                                        dialogsInBody: true,
                                        toolbar: [
                                            ["style", ["style"]],
                                            ["font", ["bold", "underline", "clear"]],
                                            ["fontname", ["fontname"]],
                                            ["para", ["ul", "ol", "paragraph"]],
                                            ["table", ["table"]],
                                            ["insert", ["link", "picture", "video"]],
                                            ["view", ["fullscreen", "codeview"]]
                                        ],
                                    }}
                                    onChange={this.onChange}
                                />
                            </div>
                            {/* <div className="col-6">
                                <div className="form-group">
                                    <label>Hình ảnh :</label>
                                    <input type="file" name="image" ref={this.fileInput} onChange={this.onChangeInput} value={this.state.image} />
                                </div>
                            </div> */}
                        </div>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCloseForm} >Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}