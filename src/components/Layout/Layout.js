import  React from 'react';
import Auxiliary from "../../hoc/auxiliary";
import classes from "./Layout.module.css";

const layout = (props) => (
    <Auxiliary>
            <div> sidebar, toolbar, backdrop </div>
            <main className={classes.Content}>
                    {props.children}
            </main>
    </Auxiliary>
);

export default layout;