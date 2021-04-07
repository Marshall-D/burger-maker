import  React,{Component} from 'react';
import Auxiliary from "../../hoc/auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import SideDrawer from "../navigation/SideDrawer/SideDrawer";


class layout extends Component  {
    state= {
        showSideDrawer: true
};
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleCLicked={this.drawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}</main>
            </Auxiliary>

        )
    }
}


export default layout;