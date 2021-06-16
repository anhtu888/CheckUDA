import React from 'react';
import FormTable from './FormTable';
export default class Index extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Loại Sản Phẩm</b></h3>
                        </div>
                        <button type="button" className="col-1 btn btn-primary">
                            <span className="fa fa-plus"></span>Thêm
                        </button>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 offset-4">
                                    {/* Form Thêm  */}
                                </div>
                            </div>
                            <FormTable/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}