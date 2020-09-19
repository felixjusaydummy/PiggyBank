import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import merchant1 from '../../js/pictures/merchant1.png'
import { Grid } from '@material-ui/core';

import uuid from 'react-uuid'
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


function createPaper(classes, video){
    return (
        <Grid item xs={12} key={uuid()}>
            <Card className={classes.root} onClick={()=>{
                window.location = video.link;
            }
            }>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={"https://img.youtube.com/vi/"+ video.id + "/0.jpg"}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {video.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {video.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/* <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button> */}
                </CardActions>
            </Card>
        </Grid>
    )
}



function ImgMediaCard(props) {
  const classes = useStyles();
  const videos =  props.learnings.map( i => createPaper(classes, i))

  return (
    <Grid container direction="row" spacing={1}>
        {/* {videos} */}
        {props.learnings.map( i => createPaper(classes, i))}
    </Grid>
    
  );
}


function mapStateToProps(state){
    return state;
  }
  
  function mapDispatchToProps(dispatch){
    return {
      goToMain: ()=>{
        const action = ""
        dispatch(action);
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ImgMediaCard)