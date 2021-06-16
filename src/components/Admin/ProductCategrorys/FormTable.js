import React from 'react';
export default class FormTable extends React.Component {
    render() {
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
                        <td className="text-center">1</td>
                        <td className="text-center">Name</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-warning text-white">
                                <span className="fas fa-edit"></span> Sửa
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger">
                                <span className="fa fa-trash"></span> Xóa
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}