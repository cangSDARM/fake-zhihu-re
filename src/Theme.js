import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: indigo,
        secondary: blue,
        error: red,
    },
    /*
    breakpoints:{
        xs: 0,
        sm: 850,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
    */
    typography: {
        useNextVariants: true
    },
    url:{
        sign: "url('https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png')",
    },
    badge:{
        dot:{
            horizontal:{
                '& span':{
                    top: '50%',
                    right: '-6px',
                }
            }
        }
    },
    navlink:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '5px',
        margin: '10px auto',
        '&:hover':{
            textDecoration: 'none'
        }
    }
});

export default theme;