import React from 'react';
import axios from 'axios';
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
            summary: '',
            content:'',
            image: '',
            active: false,
        }
    }
    componentWillMount() {
        if (this.props.elementEdit) {
            this.setState({
                id: this.props.elementEdit.id,
                name: this.props.elementEdit.name,
                summary: this.props.elementEdit.summary,
                content: this.props.elementEdit.content,
                image: this.props.elementEdit.image,
                active: this.props.elementEdit.active
            });
        }
        //console.log(this.state.content)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.elementEdit) {
            this.setState({
                id: nextProps.elementEdit.id,
                name: nextProps.elementEdit.name,
                summary: nextProps.elementEdit.summary,
                content: nextProps.elementEdit.content,
                image: nextProps.elementEdit.image,
                active: nextProps.elementEdit.active
            });
        }
        //console.log(this.state.content)
    }
    onChangeInput = (event) => {
        var target = event.target;
        var name = target.name;
        var value;
        if (name === 'active') {
            value = target.value === "true" ? true : false;
        } else {
            value = target.value;
        }
        this.setState({
            [name]: value
        });
    }
    onFileChange = event => {
        // Update the state 
        this.setState({
            image: event.target.files[0]
        });
        // console.log(this.state);
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        // console.log(this.state)
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onChange = (content) => {
        console.log(content);
        this.setState({
            content : content
        });
      }

    //upload image

    // On file upload (click the upload button) 
    onFileUpload = () => {

        // Create an object of formData 
        const formData = new FormData();

        // Update the formData object 
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        // Details of the uploaded file 
        console.log(this.state.selectedFile);

        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData);
    };

    render() {
        var { id } = this.state;

        return (
            <div className="panel panel-warning">
                <div className="">
                    <h3 className="panel-title">
                        {id === '' ? 'Thêm mới' : 'Chỉnh sửa'}
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Title :</label>
                                    <input type="text" className="form-control" placeholder="Nhập tên đăng nhập..." value={this.state.name} name="name" onChange={this.onChangeInput} />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Summary :</label>
                                    <textarea className="form-control" rows="3" name="summary" value={this.state.summary} onChange={this.onChangeInput}></textarea>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Tình trạng :</label>
                                    <select className="form-control" name="active" value={this.state.active} onChange={this.onChangeInput}>
                                        <option value={false}>Ẩn</option>
                                        <option value={true}>Hiện</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Hình ảnh :</label>
                                    <input type="file" onChange={this.onFileChange} />
                                </div>

                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label>Nội dung :</label>
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
                            </div>
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onCloseForm}>Cancel</button>
                        </div>
                    </form>
                </div>
                <script>
                </script>
            </div>

        );
    }
}

