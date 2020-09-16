import { makeStyles } from '@material-ui/core/styles';

export const useStylesStatus = makeStyles(theme => ({

    textField:{
        textAlign:'center',
        backgroundColor: '#d2e603'
    },
    textLabel:{
        fill:'#2ec1ac',
        strokeWidth:3,
        stroke:'#931a25',
        fontFamily: 'Titan One',
    },
    textValue:{
        fontFamily: 'Titan One',
        // fontSize: 30
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
        fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
        }
    }


    // style="fill:#ecf0f1;stroke:#ecf0f1;stroke-width:0"
}));
