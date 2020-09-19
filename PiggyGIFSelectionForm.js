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
import uuid from 'react-uuid'
 
class GifForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        search: "",
        selected: "",
        avatar: this.props.user.avatar
      }
      this.getImages = this.getImages.bind(this);
      this.getSearch = this.getSearch.bind(this);
  }

  getImages(){
    this.props.onSearch(this.state.search)
  }

  getSearch(e){
    this.setState({search: e.target.value});
  }

  getChangeAvatar(avatar){
    this.props.onSelect(avatar)
  }


 
  componentDidMount() {}
  
  render() {
    const iUsername = (
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="gif"
        label="Search GIF"
        name="gif"
        autoComplete="gif"
        autoFocus
        onChange={(evt)=>{ this.getSearch(evt) }}
      />
    );
  
  
    const iButton = (<Button
      color="primary"
      size="small"
      onClick={this.getImages}
    >
      Search
    </Button>);
  
    const iLoading = (
      <Typography variant="h5" gutterBottom>
          Loading
        </Typography>
    );
  
    const triggerButtonView = ()=>{
      if(this.props.action_type === STATUSTYPE.QUERY_LOADING){
          return iLoading;
      }else{
          return iButton;
      }
    }
    const resButton = triggerButtonView();

    let iBody = null
    if(this.props.action_type === ACTIONTYPE.PIGGY_GIPHY_SELECTION_QUERY){
      iBody = "LOADING . . ."
    }else{
      iBody = this.props.gif.map( image => {
          return (
              <Button key={uuid()}  onClick={this.getChangeAvatar.bind(this, image)} >
                  <img src={image} className="img-responsive" />
              </Button>)
        })
    }

    const page = (
      <Container component="main" >
        <CssBaseline />
        <div >
            <img src={this.props.user.avatar} className="img-responsive" />
            {/* {this.props.user.avatar} */}
            <Grid container direction="row" justify="flex-start" spacing={2}>
              {iUsername}
              {resButton}
            </Grid>
            
            <Grid container direction="row">
                {iBody}
              </Grid>          
        </div>
      </Container>
    );
  
    return page;
    
  }
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