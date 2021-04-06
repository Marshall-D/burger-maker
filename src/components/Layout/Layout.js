import  React from 'react';
import Auxiliary from "../../hoc/auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Auxiliary>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {props.children}</main>
    </Auxiliary>
);

export default layout;