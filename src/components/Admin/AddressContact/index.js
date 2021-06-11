import React from 'react';
import TableContact from './TableContact';
import InsertContact from './InsertContact';


export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listAddress: [],
            elementEdit: [],
            IsHidden: false,// false -> AddContact đóng <-> true -> AddContact mở
        }

    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('listAddress')) {
            //     var {listAddress} = this.state;
            // JSON.stringify(localStorage.setItem('listAddress', listAddress));
            var listAddress = JSON.parse(localStorage.getItem('listAddress'));
            this.setState({
                listAddress: listAddress
            });
        }
    }
    onUpdate = (id) => {
        var { listAddress } = this.state;
        var index = this.findIndex(id);
        var eleEdit = listAddress[index];
        //console.log(eleEdit);
        if (index !== -1) {
            this.setState({
                elementEdit: eleEdit,
                IsHidden: true
            });
        }
    }
    //Đóng form Insert
    onCloseForm = () => {
        this.setState({
            IsHidden: false,
            elementEdit: null
        });
    }

    //Lấy data từ form Insert
    onSubmit = (data) => {
        var { listAddress } = this.state;
        if (data.id === '') {
            data.id = this.randomId();
            listAddress.push(data);
        } else {
            var index = this.findIndex(data.id);
            listAddress[index] = data;
        }
        this.setState({
            listAddress: listAddress,
            IsHidden: false
        });
        //Lưu vào localStorage
        localStorage.setItem('listAddress', JSON.stringify(listAddress));
    }

    findIndex = (id) => {
        var { listAddress } = this.state;
        var result = -1;
        listAddress.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result
    }
    render() {
        var { listAddress, IsHidden, elementEdit } = this.state;

        var ElementIsHidden = IsHidden ? <InsertContact
            onSubmit={this.onSubmit}
            elementEdit={elementEdit}
            onCloseForm={this.onCloseForm}
        /> : '';
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Địa chỉ liên hệ</b></h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 offset-4">
                                    {ElementIsHidden}
                                </div>
                            </div>
                            <table id="example1" className="table table-bordered table-striped">
                                <TableContact
                                    listAddress={listAddress}
                                    onUpdate={this.onUpdate}
                                    onFiter={this.onFiter}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}