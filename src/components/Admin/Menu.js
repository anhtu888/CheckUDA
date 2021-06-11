import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
        color: "white"
    },
    label:{
        fontSize: 17
    }
});
export default function Menu() {
    // render() {
    var admin = sessionStorage.getItem('UserName');
    const classes = useStyles();
    return (
        <aside id="menuAdmin" className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#" className="brand-link text-center">
                <span className="brand-text font-weight-light">Admin <b>Trần Đức Bo</b></span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="asset/admin/images/myImg.png" className="img-circle" />
                    </div>
                    <div className="info">
                        <p style={{ color: 'white' }}>Xin chào {admin}
                            <br />
                            <span><i className="fas fa-circle text-success" /> Online</span>
                        </p>
                    </div>
                </div>
                <nav className="mt-2">

                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item has-treeview">
                            <Link to="/home-admin" className="nav-link">Dashboard</Link>
                        </li>
                        <TreeView
                            className={classes.root}
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                        >
                            {/* <TreeItem className="list-item__admin" nodeId="1" label="Quản lý website" classes={{ label: classes.label }} >
                                <Link to="/quan-ly-website-phan-hoi-khach-hang" className="nav-link"><i className="far fa-circle nav-icon" /> Phản hồi khách hàng</Link>
                                <Link to="/quan-ly-website-dia-chi-lien-he" className="nav-link"><i className="far fa-circle nav-icon" /> Địa chỉ liên hệ</Link>
                            </TreeItem> */}
                            <TreeItem className="list-item__admin" nodeId="5" label="Quản lý sản phẩm" classes={{ label: classes.label }}>
                                <Link to="/quan-ly-san-pham" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Sản phẩm</Link>
                                <Link to="/quan-ly-san-pham-loai-san-pham" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Loại sản phẩm</Link>
                                {/* <Link to="/quan-ly-don-hang" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Đơn hàng</Link> */}
                            </TreeItem>
                            {/* <TreeItem className="list-item__admin" nodeId="6" label="Quản lý người dùng" classes={{ label: classes.label }}>
                                <Link to="/tai-khoang-quan-tri" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Tài khoản quản trị</Link>
                                <Link to="/tai-khoang-khach-hang" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Tài khoản khách hàng</Link>
                            </TreeItem> */}
                        </TreeView>
                       
                        <li className="nav-item">
                            <Link to="quan-ly-tin-tuc" className="nav-link font-weight-normal text-white"><i className="nav-icon far fa-calendar-alt" />Quản Lý Tin Tức</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="gioi-thieu" className="nav-link font-weight-normal text-white"><i className="nav-icon far fa-calendar-alt" />Giới Thiệu</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
    // }
}