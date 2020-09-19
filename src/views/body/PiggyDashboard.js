import React from 'react';
import uuid from 'react-uuid'
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Paper, Table, TableBody, TableRow, TableCell, Typography, TableHead, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@material-ui/core';

import { useStyles } from "../../css/piggy-dashboard";
import { useStylesStatus } from "../../css/piggy-dashboard-coininfo";
import * as ACTIONS from '../../js/constants/action-type';
import { getView } from './ViewIdentifier'
import * as IMAGES from './../../js/pictures/PiggyClass'

import ImgMediaCard from './PiggyLearningBoards'
import NotificationPanel from './PiggyNotification'





function buildDefaultControlsView(props, classes){
  return (
    <Grid container justify="flex-start" spacing={2}>
      <Grid item  >
        <Grid container  direction="column"  alignItems="center" spacing={2}>
          <Grid item  >
            
            <Button onClick={props.goToCoins} className={classes.controlButtons} >
              <img src={IMAGES.COIN} alt="Logo" className={classes.avatar}/>
            </Button>
          </Grid>      
          <Grid item >
            <Button onClick={props.gotToLearningBoard} className={classes.controlButtons}>
              <img src={IMAGES.GRAPH} alt="Logo" className={classes.avatar}/>
            </Button>
          </Grid>    
          <Grid item >
            <Button onClick={props.gotToStore} className={classes.controlButtons}>
              <img src={IMAGES.BAG} alt="Logo" className={classes.avatar}/>
            </Button>
          </Grid>      
        </Grid>
      </Grid>
      <Grid item  >
        <Grid container  direction="column"  alignItems="center" spacing={2}>
          <Grid item >
            <Button onClick={props.gotToGift} className={classes.controlButtons} >
              <img src={IMAGES.GIFT} alt="Logo" className={classes.avatar}/>
            </Button>
          </Grid>      
          <Grid item >
            <Button onClick={props.gotToBall} className={classes.controlButtons} >
              <img src={IMAGES.GAMES} alt="Logo" className={classes.avatar}/>
            </Button>
          </Grid>    
          <Grid item >
            <Button onClick={props.gotToPlan} className={classes.controlButtons}>
              <img src={IMAGES.PROGRESS} alt="Logo" className={classes.avatar}/>
            </Button>
          </Grid>      
        </Grid>
      </Grid>
    </Grid>
  )
}


function buildCoinsView(props, styles){
    return (
      <Grid container direction="column" spacing={3}>
        <Grid item m={6} >
            <Grid container  direction="row" className={styles.textField}>
                <svg height="70" width="80">
                  <polygon points="0,0 0,70 70,0" className={styles.textLabel}  />
                  <text x="-10" y="0" transform="rotate(-45 , 60 0)">Savings</text>
                </svg>
                <NumberFormat className={styles.textValue} value={props.user.savings} displayType={'text'} thousandSeparator={true} />
            </Grid>
        </Grid>
        <Grid item m={6} >
            <Grid container  direction="row" className={styles.textField}>
                <svg height="70" width="80">
                  <polygon points="0,0 0,70 70,0" className={styles.textLabel}  />
                  <text x="-10" y="0" transform="rotate(-45 , 60 0)">Coins</text>
                </svg>
                <NumberFormat className={styles.textValue} value={props.user.coins} displayType={'text'} thousandSeparator={true} />
            </Grid>
        </Grid>
        <Grid item  >
          <Button onClick={props.goToMain}>Back</Button>
        </Grid>  
      </Grid>
    )
}


function buildGiftView(props, gifts){
    return (<Container>
      <Table size="small">
          <TableBody>
            
              <TableRow key={uuid()}>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Donor</TableCell>
                  <TableCell align="left">Remarks</TableCell>
                  <TableCell align="right">Amount</TableCell>
              </TableRow>
            
            
            {gifts.map(elem=>(
                <TableRow key={uuid()}>
                    <TableCell align="left">{elem.date}</TableCell>
                    <TableCell align="left">{elem.name}</TableCell>
                    <TableCell align="left">{elem.donor}</TableCell>
                    <TableCell align="left">{elem.remark}</TableCell>
                    <TableCell align="right">
                      <Typography component="p" >
                      Php <NumberFormat value={elem.amount} displayType={'text'} thousandSeparator={true} />
                      </Typography>
                    </TableCell>
                </TableRow>
            ))}        
          </TableBody>
      </Table>
      <Button onClick={props.goToMain}>Back</Button>
    </Container>)
}


function buildPlansView(props, plans){
  return (<Container>
    <Table size="small">
        <TableBody>
            <TableRow key={uuid()}>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Target Amt.</TableCell>
                <TableCell align="right">Due Date</TableCell>
            </TableRow>

            {plans.map(elem=>(
                <TableRow key={uuid()}>
                    <TableCell align="left">{elem.name}</TableCell>
                    <TableCell align="right">
                        <Typography component="p" >
                          <NumberFormat value={elem.amount} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </TableCell>
                    <TableCell align="right">
                        <Typography component="p" >
                          <NumberFormat value={elem.targetAmount} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </TableCell>
                    <TableCell align="right">{elem.duedate}</TableCell>
                </TableRow>
            ))}        
        </TableBody>
    </Table>
    <Button onClick={props.goToMain}>Back</Button>
  </Container>)
}


function buildStoresView(props, stores, classes){
  return (
    <div>
        {stores.map(elem=>(
            <img key={uuid()} src={elem}  className={classes.imgStore} />
        ))} 
    </div>
  )
}


function buildPersonInfoView(props){
  return (<Container>
    <div>
        <Typography component="p" >Name: {props.user.name}</Typography>
        <Typography component="p" >Birthday: {props.user.birthday}</Typography>
        <Typography component="p" >Email: {props.user.email}</Typography>
        <Typography component="p" >Contact No: {props.user.contactNo}</Typography>
        {/* <Button 
          // type="button"
          // variant="contained"
          color="primary"
          onClick={props.gotToViewChangeAvatar}
           > Change Avatar</Button> */}
    </div>
    <Typography component="p" >Benefactors</Typography>
    <Table size="small">
        <TableBody>
            <TableRow key={uuid()}>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Relationship</TableCell>
                <TableCell align="right">Contact No.</TableCell>
                <TableCell align="right">Email</TableCell>
            </TableRow>

            {props.user.benefactor.map(elem=>(
                <TableRow key={uuid()}>
                    <TableCell align="left">{elem.name}</TableCell>
                    <TableCell align="right">{elem.relationship}</TableCell>
                    <TableCell align="right">{elem.contactNo}</TableCell>
                    <TableCell align="right">{elem.email}</TableCell>
                </TableRow>
            ))}        
        </TableBody>
    </Table>
    <Button color="primary" onClick={props.goToMain}>Back</Button>
  </Container>)
}


function buildLearningBoard(props){
  return (
    <Grid>
      <Grid container direction="row" >
          <ImgMediaCard/>
      </Grid>
      <Button color="primary" onClick={props.goToMain}>Back</Button>
    </Grid>
  )
}


function buildBallView(props, avatars, classes){
  return (
    <div>
        <Button key={uuid()} onClick={props.onSelectAvatar1}>
          <img  src={IMAGES.PROFILE1}  className={classes.imgStore} />
        </Button>
        <Button key={uuid()} onClick={props.onSelectAvatar2}>
          <img  src={IMAGES.PROFILE2}  className={classes.imgStore} />
        </Button>
        
    </div>
  )
}






function Dashboard(props){
  const classes = useStyles();
  const classesStatus = useStylesStatus();

  let detailPanel = null;
  let template = "default"
  let footerPanel = false

  if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_COINS){
    detailPanel = buildCoinsView(props, classesStatus)
    template = "default"
  } else if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_GIFT){
    detailPanel = buildGiftView(props, props.user.transaction)
    template = "template1"
  } else if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_PLAN){
    detailPanel = buildPlansView(props, props.user.plans)
    template = "template1"
  } else if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_STORE){
    detailPanel = (
      <Grid>
        {buildStoresView(props, props.stores, classes)}
        <Button onClick={props.goToMain}>Back</Button>
      </Grid>
    )
    
    template = "default"
  } else if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_PERSONINFO){
    detailPanel = buildPersonInfoView(props)
    template = "template1"
  } else if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_LEARNINGBOARDS){
    detailPanel = buildLearningBoard(props)
    template = "template1"
  } else if(props.action_type == ACTIONS.PIGGY_DASHBOARD_VIEW_BALL){
    detailPanel = (
      <Grid>
        {buildBallView(props, null, classes)}
        <Button onClick={props.goToMain}>Back</Button>
      </Grid>
    )
    
    template = "default"
  } else{
    detailPanel = buildDefaultControlsView(props, classes)
    template = "default"
    footerPanel = true
  }
  

  const titlePanel = (<Paper p={2} >
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      
    >
      <Typography className={classes.avatar_name}>
        Hi {props.user.name}!
      </Typography>  
      <Typography className={classes.avatar_name}>
        Php <NumberFormat value={props.user.savings} displayType={'text'} thousandSeparator={true} />
      </Typography>  
    </Grid>
    </Paper>
    )

  
  let generalPanel = (<Button onClick={props.gotToPersonInfo} className={classes.controlButtons}>
    <img src={IMAGES.PROFILE} alt="Logo" className={classes.img}/>
  </Button>)
  if (props.current_avatar) {
    console.log("change avatar: "+ props.current_avatar)
    if(props.current_avatar === IMAGES.PROFILE1){
      generalPanel = (<Button onClick={props.gotToPersonInfo} className={classes.controlButtons}>
        <img src={IMAGES.PROFILE1} alt="Logo" className={classes.img}/>
      </Button>)
    }else{
      generalPanel = (<Button onClick={props.gotToPersonInfo} className={classes.controlButtons}>
        <img src={IMAGES.PROFILE2} alt="Logo" className={classes.img}/>
      </Button>)
    }
    
  }
  
  footerPanel = (footerPanel)? NotificationPanel(props.user.notifications, classes): null
  return getView(template, titlePanel, generalPanel, detailPanel, footerPanel)
}



function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
    goToMain: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_MAIN};
      dispatch(action);
    },

    goToCoins: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_COINS};
      dispatch(action);
    },

    gotToGift: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_GIFT};
      dispatch(action);
    },
    
    gotToPlan: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_PLAN};
      dispatch(action);
    },

    gotToStore: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_STORE};
      dispatch(action);
    },

    gotToPersonInfo: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_PERSONINFO};
      dispatch(action);
    },

    gotToViewChangeAvatar: ()=>{
      const action = {type: ACTIONS.VIEW_CHANGE_AVATAR};
      dispatch(action);
    },

    gotToLearningBoard: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_LEARNINGBOARDS};
      dispatch(action);
    },

    gotToBall: ()=>{
      const action = {type: ACTIONS.PIGGY_DASHBOARD_VIEW_BALL};
      dispatch(action);
    },

    onSelectAvatar1: ()=>{
      const action = {
        type: ACTIONS.PIGGY_GIPHY_SELECTION_SELECTED,
        payload: {
          selected: IMAGES.PROFILE1,
        }
      };
      dispatch(action);
    },

    onSelectAvatar2: ()=>{
      const action = {
        type: ACTIONS.PIGGY_GIPHY_SELECTION_SELECTED,
        payload: {
          selected: IMAGES.PROFILE2,
        }
      };
      dispatch(action);
    },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

