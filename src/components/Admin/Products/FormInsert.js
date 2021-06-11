import React from 'react';
export default class FormInsert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            categroryName : 'Thức uống đá xây',
            categroryId : '',
            price : '',
            active : true,
            image : 'asset/web/images/lt-okinawa.png',
            listProductCategrory : []
        }
    }
    componentWillMount() {
        if (this.props.elementEdit) {
            this.setState({
                id : this.props.elementEdit.id,
                name : this.props.elementEdit.name,
                categroryName : this.props.elementEdit.categroryName,
                categroryId : this.props.elementEdit.categroryId,
                price : this.props.elementEdit.price,
                active : this.props.elementEdit.active,
                image : this.props.elementEdit.image
            });
        }
        if (localStorage && localStorage.getItem('listProductCategrory')) {
            var listProductCategrory = JSON.parse(localStorage.getItem('listProductCategrory'));
            this.setState({
                listProductCategrory : listProductCategrory
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.elementEdit) {
            this.setState({
                id: nextProps.elementEdit.id,
                name: nextProps.elementEdit.name,
                categroryName : nextProps.elementEdit.categroryName,
                categroryId : nextProps.elementEdit.categroryId,
                price : nextProps.elementEdit.price,
                active : nextProps.elementEdit.active,
                image : nextProps.elementEdit.image
            });
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value;
        if (name === 'active') {
            value = target.value === "true" ? true : false;
        }else{
           value = target.value;
        }
        this.setState({
            [name] : value
        });
    }
    onChangeCategrory = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var index = event.nativeEvent.target.selectedIndex;
        var innerText = target[index].text;
        // event.nativeEvent.target[index].text
        console.log('id :'+value+', Name: '+innerText);
        this.setState({
            categroryName : innerText,
            categroryId: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        // console.log(this.state)
    }
    onClose = () =>{
        this.props.onCloseForm();
    }
    render() {
        var {id, categroryId,listProductCategrory} = this.state;
        var elelistProductCategrory = listProductCategrory.map((item,index)=>{
            return <option key={item.id} value={item.id}>{item.name}</option>
        });
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id ? 'Edit' : 'Add Product'}
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Tên sản phẩm :</label>
                                    <input type="text" name="name" className="form-control" placeholder="Nhập tên sản phẩm..." onChange={this.onChange} value={this.state.name} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Loại sản phẩm :</label>
                                    <select className="form-control" name="categrory" value={categroryId} onChange={this.onChangeCategrory} >
                                    <option value="">Chọn loại sản phẩm</option>
                                        {/* <option value="Thức uống đá xây">Thức uống đá xây</option>
                                        <option value="Trà nguyên chất">Trà nguyên chất</option>
                                        <option value="Trà sữa">Trà sữa</option>
                                        <option value="Topping">Topping</option>
                                        <option value="Latter Series">Latter Seriés</option> */}
                                        {elelistProductCategrory}
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Giá sản phẩm :</label>
                                    <input type="text" name="price" className="form-control" onChange={this.onChange} value={this.state.price} placeholder="Nhập giá sản phẩm..." />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Tình trạng :</label>
                                    <select className="form-control" name="active" value={this.state.active} onChange={this.onChange}>
                                        <option value = {true}>Hiện</option>
                                        <option value = {false}>Ẩn</option>
                                    </select>
                                </div>
                            </div>
                            {/* <div className="col-6">
                                <div className="form-group">
                                    <label>Hình ảnh :</label>
                                    <input type="file" name="image" onChange={this.onChange} value={this.state.image} placeholder="Nhập giá sản phẩm..." />
                                </div>
                            </div> */}
                        </div>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClose}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}