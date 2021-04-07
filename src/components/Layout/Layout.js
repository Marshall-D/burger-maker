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


    render() {
        return (
            <Auxiliary>
                <Toolbar/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}</main>
            </Auxiliary>

        )
    }
}


export default layout;