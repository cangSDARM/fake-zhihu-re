import React from 'react';

import Share from '@material-ui/icons/ShareRounded';

import Modal from '@material-ui/core/Modal';
import { Typography, Card, Button, IconButton, Table, TableBody, TableCell, TableRow, Checkbox } from '@material-ui/core';

import { withStyles } from '@material-ui/core';

let TODO = {
    TODO:[
        "1. 修改样式",
        '2. 适应其他的组件',
    ],
    //收藏夹模态框
}

let styles = theme=>({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentwarpper: {
        position: 'relative',
        background: 'none',
        border: 'none',
        padding: 'auto 10px',
        display: 'flex',
        '&:focus': {
            outline: 'none'
        }
    },
    content: {
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    boxes: {
        minWidth: '400px',
        maxHeight: '50%',
        overflow: 'auto',
    },
    boxtitle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& :first-child': {
            fontSize: 20
        },
        '&:hover':{
            cursor: 'default'
        }
    }
})

let id = 0;
let create = ()=>{
    id += 1;
    let itemnum = id - 1;
    return { id, name:"xxx", itemnum }
}
let rows = [
    create(),
    create(),
    create(),
    create(),
    create(),
    create(),
]

class Portals extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selects: []
        }
    }
    handleClick = {
        collection: (e, id)=>{
            const {selects}  = this.state;
            const selectedIndex = selects.indexOf(id);
            let newSelects = [];
            if(selectedIndex===-1){
                newSelects = newSelects.concat(selects, id);
            }else if(selectedIndex===selects.length - 1){
                newSelects = newSelects.concat(selects.slice(0, -1));
            }else if(selectedIndex > 0){
                newSelects = newSelects.concat(
                    selects.slice(0, selectedIndex),
                    selects.slice(selectedIndex+1)
                )
            }
            this.setState({selects:newSelects});
        },
        createCollection: (e)=>{
            console.log("添加收藏夹！");
        }
    }
    selected = id => this.state.selects.indexOf(id) !== -1;
    render(){
        let {open, handleClose, classes}=this.props;
        return <Modal
            aria-labelledby="modal-title"
            open={open} //true, 则该Model将显示
            onClose={handleClose}
            className={classes.root}
        >
            <div className={classes.contentwarpper}>
                <Card className={classes.content}>
                    <div style={{
                        textAlign: 'center'
                    }}>
                        <Typography variant="h4" id="modal-title">
                            添加收藏
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            请选择需要添加的收藏夹
                        </Typography>
                    </div>
                    <div className={classes.boxes}>
                        <Table>
                            <TableBody>
                                {rows.map(row=>{
                                const checked = this.selected(row.id);
                                const collect = e => this.handleClick.collection(e, row.id);
                                return<TableRow
                                    aria-checked={checked}
                                    role="checkbox"
                                    key={row.id}
                                    selected={checked}
                                    onClick={collect}
                                >
                                    <TableCell>
                                        <div className={classes.boxtitle}>
                                            <span>{row.name}</span>
                                            <span>{row.itemnum}条内容</span>
                                        </div>    
                                    </TableCell>
                                    <TableCell padding="checkbox" align="right">
                                        <Button onClick={collect} variant="outlined" color="secondary">
                                            {checked ? "删除收藏" : "添加收藏"}
                                        </Button>
                                    </TableCell>
                                </TableRow>})}
                            </TableBody>
                        </Table>
                    </div>
                    <div>
                        <Button onClick={this.handleClick.createCollection} color="primary" variant="contained" style={{
                            minWidth: 200
                        }}>创建收藏夹</Button>
                    </div>
                </Card>
                <IconButton
                    onClick={handleClose}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: '-50px'
                    }}
                >
                    <Share/>
                </IconButton>
            </div>
        </Modal>
    }
}
export default withStyles(styles)(Portals);