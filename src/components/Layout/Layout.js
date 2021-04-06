import  React from 'react';
import Auxiliary from "../../hoc/auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDrawer from "../navigation/SideDrawer/SideDrawer";

const layout = (props) => (
    <Auxiliary>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className={classes.Content}>
            {props.children}</main>
    </Auxiliary>
);

export default layout;