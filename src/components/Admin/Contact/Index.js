import React from 'react';
import AddContact from './AddContact';
import TableContact from './TableContact';
import ElementTableContact from './ElementTableContact';
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listContact : [],
            IsHidden : false ,// false -> AddContact đóng <-> true -> AddContact mở
            fiter : {
                email : ''
            }
        }
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('listContact')){
            var listContact = JSON.parse(localStorage.getItem('listContact'));
            this.setState({
                listContact : listContact
            });
        }
    }
    //ĐÓng mở Form AddContact
    onOpenForm = ()=>{
        this.setState({
            IsHidden : !this.state.IsHidden
        });
    }
    onDelete = (id)=>{
        var {listContact} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            listContact.splice(index,1);
            this.setState({
                listContact : listContact
            });
            localStorage.setItem('listContact', JSON.stringify(listContact));
        }
    }
    onCheck = (id)=> {
        var {listContact} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            listContact[index].active = !listContact[index].active
            this.setState({
                listContact : listContact
            });
            localStorage.setItem('listContact', JSON.stringify(listContact));
            // console.log(this.state.listContact)
        }
    }
    onFiter = (fiterName) =>{
        // console.log(fiterName);
        this.setState({
            fiter : {
                email : fiterName.toLowerCase()
            }
        });
    }
    findIndex(id){
        var {listContact} = this.state;
        var result = -1;
        listContact.forEach((item,index)=>{
            if(item.id === id){
                result = index;
            }
        });
        return result;
    }
    render() {
        var {IsHidden,listContact, fiter} = this.state;
        var ElementIsHidden = IsHidden ? <AddContact /> : '';

        if(fiter){
            if(fiter.email){
                listContact = listContact.filter((item)=>{
                    return item.email.toLowerCase().indexOf(fiter.email) !== -1;
                });
            }
        }
        return (
            <div className="row">
                <div className="col-xs-12" style={{ width: '100%' }}>
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title text-primary " style={{ fontSize: '30px' }}><i className="fas fa-align-justify" /> <b>Phản hồi khách hàng</b></h3>
                        </div>
                        {/* <button type="button" className="col-1 btn btn-primary" onClick={this.onOpenForm}>
                            <span className="fa fa-plus"></span>Thêm
                        </button> */}
                        <div className="card-body">
                            {/* <div className="row">
                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 offset-4">
                                    Form Thêm 
                                    {ElementIsHidden}
                                </div>
                            </div> */}
                            {/* Form Table */}
                            <table id="example1" className="table table-bordered table-striped">
                                <TableContact 
                                    listContact ={listContact}
                                    onDelete = {this.onDelete}
                                    onCheck = {this.onCheck}
                                    onFiter = {this.onFiter}
                                />
                                {/* Element Table */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}