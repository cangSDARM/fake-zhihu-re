import React from "react";
import {Grid, Divider, Card} from "@material-ui/core";


import { withStyles } from "@material-ui/core";

import EachCard from '../../Index/Left/EachCard';
import Topics from './Topics';

let styles = theme=>({
});

class Left extends React.Component{
    render(){
        let {classes} = this.props;
        return <div>
            <Card>
                <Topics/>
                <EachCard />
            </Card>
        </div>
    }
}
export default withStyles(styles)(Left);