import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

/**
 * 包装Tab用
 *  */
class TabWarpper extends React.Component{
    renderTabs = (tabs, tabclass)=>{
        return tabs.map((item, index)=>{
            return <Tab label={item.title} icon={item.icon} key={index} className={tabclass}/>
        })
    }
    render(){
        let { value, tabs, classes, handleChange } = this.props;
        let tabsclass = classes ? classes.tabsclass : undefined;
        let tabclass = classes ? classes.tabclass : undefined;
        return <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            className={tabsclass}
        >
            {this.renderTabs(tabs, tabclass)}
        </Tabs>
    }
}

TabWarpper.propTypes = {
    value: PropTypes.number.isRequired,
    tabs: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    classes: PropTypes.object,
}

export default TabWarpper;