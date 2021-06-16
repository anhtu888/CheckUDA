import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
        color: "black"
    },
    label: {
        fontSize: 17,
        width: '80%'
    }
});
export default function Menu() {
    const classes = useStyles();
    return (
        <>
            <li>
                <a href="index.html">
                    <i class="menu-icon glyphicon glyphicon-home"></i>
                    <span class="menu-text"> Dashboard </span>
                </a>
            </li>
            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <TreeItem className="list-item__admin" nodeId="5" label="Quản lý sản phẩm" classes={{ label: classes.label }}>
                    <Link to="/quan-ly-san-pham" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Sản phẩm</Link>
                    <Link to="/quan-ly-san-pham-loai-san-pham" className="nav-link list-link__admin"><i className="far fa-circle nav-icon" /> Loại sản phẩm</Link>
                </TreeItem>
            </TreeView>
        </>
    )
}