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

import axios from 'axios';
 
export default class GifForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         images: [],
         loading: 0,
         doneLoading: false,
         resdata: []
      }
      this.getReources = this.getReources.bind(this);
      this.getImages = this.getImages.bind(this);
   }
 
  async getReources(){
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e6171b13d4159aa39793cc0b447bbb93&sort_by=popularity.desc`)
      .then(res => {
        const images = res.data;
        this.setState({ 
          images: images, 
          doneLoading:images.results.length
        });
 
        this.state.images.results.map( i => {
          this.getImages(i)
        })
      })
  }
 
  async getImages(imageref){
    let url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+imageref.poster_path
    console.log(url)
    axios.get(url)
      .then(res => {
        const resval = res.data;
        imageref.retrieve_image=resval
        this.state.resdata.push(url)
        this.setState({ 
          images: this.state.images, 
          loading: this.state.loading+1 ,
          resdata: this.state.resdata
        })
      })
  }
 
  componentDidMount() {
    this.getReources() 
  }
 
  render() {
    const pix = this.state.resdata.map( image => {
      return <img key={image} src={image} className="img-responsive" />
    })
 
    if(this.state.loading<this.state.doneLoading){
      console.log(this.state.loading)
      return(<div>
        loading: {this.state.loading}
      </div>)
      
    }else{
      return (
        <div>{pix}</div>
      )
    }
    
  }
}