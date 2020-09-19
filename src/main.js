import React from 'react';
import SignIn from './views/body/SignIn'
import Home from './views/body/PiggyHome'
// import GifForm from '../PiggyGIFSelectionForm'

import Store  from './js/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import * as URL_LIST from "./js/constants/url-list"
import * as AUTHENTICATESERVICE from  "./js/actions/authentication-manager"



const AuthService = ()=>{
  const token = AUTHENTICATESERVICE.getAuthorization();
  if(token){    
    //reload state
    return true;
  }else{
    return false;
  }
}

const SecretRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    // AuthService.isAuthenticated === true
    AuthService()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);

function Main(props) {
  return (
    <div>  
      <Provider store = {Store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'  component = {SignIn}/>
            <SecretRoute path={URL_LIST.URL_USER_HOME}  component = {Home} />
            {/* <SecretRoute path={URL_LIST.URL_GIF_SELECT}  component = {GifForm} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>  
  );
}


export default (Main)
