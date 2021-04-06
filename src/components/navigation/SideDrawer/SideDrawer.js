import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <Logo></Logo>
            <nav>
                <NavigationItems>

                </NavigationItems>

            </nav>
        </div>
    );
};

export default SideDrawer;