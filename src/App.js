import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Routed from './Router';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import './Global.css';

class App extends React.Component {
  render() {
    
    /*
    
    查看主题样式：console.log(theme); 全局暴露的const
    
    */
    
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Routed />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
