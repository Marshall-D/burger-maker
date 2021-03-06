import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../ui/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/auxiliary";

const SideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems>

                    </NavigationItems>

                </nav>
            </div>
        </Auxiliary>

    );
};

export default SideDrawer;