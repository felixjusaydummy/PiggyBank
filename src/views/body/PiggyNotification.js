import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import uuid from 'react-uuid'

// {
//     description: "Sister Kai gave you 50php rewards for Birthday",
//     title: "Suprise Ni Ate",
//     from: "Sister Kai",
//     avatar: ""
// },

function buildFooterItem(item, classes){
        
    return (<div key={uuid()}><ListItem alignItems="flex-start">
            <ListItemAvatar>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
              <Avatar alt={item.from} />
            </ListItemAvatar>
            <ListItemText
              primary={item.from}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {item.title + " "}
                  </Typography>
                   - {item.description}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" /></div>)

}

function buildFooterList(notifications, classes){
     const footerPanel = (
        <List className={classes.root}>
          {notifications.map( i=> buildFooterItem(i, classes) )}
        
        </List>
    )
    return footerPanel
}

export default function NotificationPanel(notifications, classes){

    return buildFooterList(notifications, classes)
}


function temp(classes){
    const footerPanel = (
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
    )

    return footerPanel
}