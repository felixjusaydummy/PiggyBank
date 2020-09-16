import { makeStyles } from '@material-ui/core/styles';
import KOALALOGO from './../js/pictures/koala.png'

var bgColors = { 
  "Default": "#81b71a",
  "Blue": "#00B1E1",
  "Cyan": "#37BC9B",
  "Green": "#7fad4e",
  "DarkGreen": "#5c8037",
  "Red": "#E9573F",
  "Yellow": "#F6BB42",
  "White": "#FFFFFF",
};

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  paper_signin: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  papertips: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },

  avatar: {
    // margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    // backgroundColor: bgColors.Green,
    // flex: 1,
    width: '130px',
    height: '100px',
    // backgroundImage: url('')
  },

  avatar_name: {
    margin: theme.spacing(3, 0, 2),
    fontFamily: 'Titan One',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    }
  },


  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: bgColors.Green,
    "&:hover": {
      background: bgColors.DarkGreen
    },
  },

  img: {
    width: '100%',
    height: '100%',
    alignItems: 'top',
  },

  imgtips: {
    width: '100%',
    height: 100,
    backgroundColor: bgColors.Green,
    "&:hover": {
      background: bgColors.DarkGreen
    },
  },
  submit_spacing: {
    margin: theme.spacing(0,2,0, 0),
    backgroundColor: bgColors.Green,
    "&:hover": {
      background: bgColors.DarkGreen
    },
  },


  controlButtons: {
    // marginRight:40,
    // marginLeft:40,
    // marginTop:10,
    // paddingTop:20,
    // paddingBottom:20,
    // // backgroundColor:'#68a0cf',
    // borderRadius:10,
    // borderWidth: 1,
    // borderColor: '#7fad4e'
  },

  
}));
