import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//ICONS
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';

import * as ACTIONTYPE from './../../js/constants/action-type'
import * as STATUSTYPE from './../../js/constants/status-type'

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
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: bgColors.Green,
    "&:hover": {
      background: bgColors.DarkGreen
    },
  },
}));


const getDateValue = (datevalue)=>{
  const options = {
    year: 'numeric', month: 'long', day: '2-digit',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: true,
    timeZone: 'Asia/Manila' 
  };
  const res = new Intl.DateTimeFormat('en-GB',options).format(new Date(datevalue))
  return res;
}





// INBOX LIST
let counter = 0;
function getId(){
  counter = counter + 1;
  return counter;
}

function getMessageIcon(message){
  let res = null
  if(message.status === STATUSTYPE.INBOX_STATUS_REWARDS){
    res = (<CardGiftcardIcon/>)
  }else if(message.status === STATUSTYPE.INBOX_STATUS_NOTIFICATTION){
    res = (<NotificationsIcon/>)
  }
  return res
}

function trimMessageText(textMessage){
  const limit = 100;
  if(textMessage.length>limit){
    return (textMessage.substring(0, limit)+"...")
  }else{
    return textMessage
  }
}




//BODY
// INBOX MESSAGE PAGE
const buildMessagePage = (elem, props,classes)=>{
  
  const page = (
      // <List>
      //   <ListItem key={1}>
        <div>
          <Typography variant="h4" gutterBottom>
            {elem.title}
          </Typography>
          
          <Typography
              variant="body2"
              color="textPrimary"
            >
              {getDateValue(elem.date_send)}
            </Typography>

          <Typography variant="body1" gutterBottom>.</Typography>
          
          {elem.message}
          
          <Typography gutterBottom>.</Typography>
        
          <Button
            type="button"
            variant="contained"
            color="primary"
            size="large" 
            className={classes.submit}
            onClick={()=>props.closeMessage(elem)}
          >
            Back
            {/* <ListItemText >Back</ListItemText> */}
          </Button>
        </div>
      //   </ListItem>

      // </List>
    )
  return page;
}
// INBOX ITEMS
function buildMessageItems(elem, props, classes){
  const textBold = ()=>{
    if(!elem.open){
      return (<strong>{elem.title}</strong>)
    }else{
      return(elem.title)
    }
  }
  const message = (
      <ListItem button key={getId()} onClick={()=>props.readMessage(elem)}>
        <ListItemIcon>
          {getMessageIcon(elem)}
        </ListItemIcon>
        <ListItemText 
          primary={textBold()} 
          secondary={
            // elem.message
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {/* {new Intl.DateTimeFormat('en-GB', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                  }).format(new Date(elem.date_send))} */}
                  {getDateValue(elem.date_send)}
              </Typography>
               - {trimMessageText(elem.message)}
            </React.Fragment>
          }
          />
      </ListItem>
  )
  return message;
}




// MAIN //
function Inbox(props) {
  const classes = useStyles();
  const  defaultPage = (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Inbox
          </ListSubheader>
        }
        className={classes.root}
      >
        {(props.user.inbox)?
          props.user.inbox.map(elem=>(
            buildMessageItems(elem, props, classes)
          ))
        :""}
        
      </List>
    );

  if(!props.current_inbox){
    return defaultPage
  }else{
    return buildMessagePage(props.current_inbox, props, classes)
  }
  
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  
  return {
    readMessage: (message)=>{
        const action = {
          type: ACTIONTYPE.INBOX_READ_MESSAGE,
          payload: message
        };
        dispatch(action);
    },
    closeMessage: ()=>{
      const action = {
        type: ACTIONTYPE.INBOX_READ_MESSAGE,
        payload: null
      };
      dispatch(action);
  }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Inbox)

















// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     // maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

// export default function Inbox() {
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Brunch this weekend?"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Summer BBQ"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 to Scott, Alex, Jennifer
//               </Typography>
//               {" — Wish I could come, but I'm out of town this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary="Oui Oui"
//           secondary={
//             <React.Fragment>
//               <Typography
//                 component="span"
//                 variant="body2"
//                 className={classes.inline}
//                 color="textPrimary"
//               >
//                 Sandra Adams
//               </Typography>
//               {' — Do you have Paris recommendations? Have you ever…'}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
//     </List>
//   );
// }