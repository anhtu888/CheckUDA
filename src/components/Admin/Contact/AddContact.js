import React from 'react'

export default class AddContact extends React.Component {
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add Or Edit
                                            </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" placeholder="Nhập tên..." />
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="text" className="form-control" placeholder="Nhập email..." />
                        </div>
                        <div className="form-group">
                            <label>title :</label>
                            <input type="text" className="form-control" placeholder="Nhập title..." />
                        </div>
                        <div className="form-group">
                            <label>content :</label>
                            <input type="text" className="form-control" placeholder="Nhập content..." />
                        </div>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Save</button>&nbsp;
                                                    <button type="button" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}