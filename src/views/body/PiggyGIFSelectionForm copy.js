import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import * as STATUSTYPE from "../../js/constants/status-type";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'

import { useStyles } from "../../css/dashboard.js"
import * as ACTIONTYPE from "../../js/constants/action-type";
import { Grid } from '@material-ui/core';

function GifForm(props){

  const classes = useStyles();
  const [username, setUsername] = React.useState(null);

  const triggerSignIn = ()=>{
    if(props.login_status !== STATUSTYPE.QUERY_LOADING)
      props.onSearch(username);
  }

  const triggerSelected = (item, initialize)=>{
    if(initialize === false )
      props.onSelect(username);
  }

  const iUsername = (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="gif"
      label="Search GIF"
      name="gif"
      autoComplete="gif"
      autoFocus
      onChange={(evt)=>{ setUsername(evt.target.value) }}
    />
  );


  const iButton = (<Button
    type="button"
    variant="contained"
    fullWidth
    color="primary"
    className={classes.submit}
    onClick={triggerSignIn}
  >
    Search
  </Button>);

  const iLoading = (
    <Typography variant="h5" gutterBottom>
        Loading
      </Typography>
  );

  const triggerButtonView = (props)=>{
    if(props.action_type === STATUSTYPE.QUERY_LOADING){
        return iLoading;
    }else{
        return iButton;
    }
  }


  const resButton = triggerButtonView(props);

  let iBody = null
  if(props.action_type === ACTIONTYPE.PIGGY_GIPHY_SELECTION_QUERY){
    iBody = "LOADING . . ."
  }else{
    let initialize = true
    iBody = props.gif.map( image => {
        return (
            <Button onClick={triggerSelected(image, initialize)}>
                <img key={image} src={image} className="img-responsive" />
            </Button>)
      })
      initialize = false
  }

  const page = (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div >
          {iUsername}
          {resButton}
          <Grid container direction="row">
              {iBody}
            </Grid>          
          
      </div>
    </Container>
  );

  return page;
}

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return {
      onSearch: (iSearch)=>{
          const action = {
            type: ACTIONTYPE.PIGGY_GIPHY_SELECTION_QUERY,
            payload: {
              search: iSearch,
            }
          };
          dispatch(action);
      },
      onSelect: (iAvatar)=>{
        const action = {
          type: ACTIONTYPE.PIGGY_GIPHY_SELECTION_SELECTED,
          payload: {
            selected: iAvatar,
          }
        };
        dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GifForm)