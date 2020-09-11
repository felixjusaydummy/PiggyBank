import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';
import { useStyles } from "../../css/piggy-dashboard";
import { VIEW_REDIRECT_PURSE, VIEW_REDIRECT_VAULT } from '../../js/constants/action-type';

import Grid from '@material-ui/core/Grid';
import TipsModal from '../modal/TipsModal'

//logs


import { Paper } from '@material-ui/core';
import * as IMAGES from './../../js/pictures/PiggyClass'


const { forwardRef, useRef } = React;






// INBOX LIST
let counter = 0;
function getId(){
  counter = counter + 1;
  return counter;
}
function trimMessageText(textMessage){
  const limit = 50;
  if(textMessage.length>limit){
    return (textMessage.substring(0, limit)+"...")
  }else{
    return textMessage
  }
}







function Dashboard(props){
  const classes = useStyles();

  const ref = useRef();
  const ChildModal = forwardRef(TipsModal);

  const generalControls = (
    <Grid container xs={6} >
          <Grid container xs={3} direction="column" justify="center" alignItems="center">
            <Grid item >
              <Button>
                <img src={IMAGES.COIN} alt="Logo" className={classes.img}/>
              </Button>
            </Grid>      
            <Grid item >
              <Button>
                <img src={IMAGES.GRAPH} alt="Logo" className={classes.img}/>
              </Button>
            </Grid>    
            <Grid item >
              <Button>
                <img src={IMAGES.BAG} alt="Logo" className={classes.img}/>
              </Button>
            </Grid>      
          </Grid>
          <Grid container xs={3} direction="column" justify="center" alignItems="center">
            <Grid item >
              <Button>
                <img src={IMAGES.GIFT} alt="Logo" className={classes.img}/>
              </Button>
            </Grid>      
            <Grid item >
              <Button>
                <img src={IMAGES.GAMES} alt="Logo" className={classes.img}/>
              </Button>
            </Grid>    
            <Grid item >
              <Button>
                <img src={IMAGES.PROGRESS} alt="Logo" className={classes.img}/>
              </Button>
            </Grid>      
          </Grid>
        </Grid>
  )

  const mainpage = (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <ChildModal ref={ref}/>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper p={2} className={classes.avatar_name}>Hi {props.user.name}!</Paper>
        </Grid>
        <Grid item xs={6}>
          <Button>
            <img src={IMAGES.PROFILE} alt="Logo" className={classes.img}/>
          </Button>
        </Grid>

        {generalControls}

      </Grid>
        



    </Container>
    

    );
  
  return mainpage
}



function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    onPurse: ()=>{
        const action = {type: VIEW_REDIRECT_PURSE};
        dispatch(action);
    },

    onVault: ()=>{
      const action = {type: VIEW_REDIRECT_VAULT};
      dispatch(action);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

