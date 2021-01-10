import React from 'react'
import {makeStyles} from '@material-ui/styles'
import { red } from '@material-ui/core/colors'; 
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography,
} from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import avatar from './Images/deer.png'
import CardData from './CardData'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
    maxHeight:'auto',
    borderRadius:'10px',
    backgroundColor:'rgb(46, 37, 24, .5)',
    backdropFilter:'blur(0px)',
    color:'tan',
  },
  margin: {
      width: '200px',
     color:'white',
    borderColor: 'white',
  },
  heading:{
      color:'tan',
      fontSize: '30px',
      fontWeight:'20'
  },
  title:{
    color:'white'
},
  media: {
    height: '300px',
    paddingTop: '16.25%', // 16:9
  },
  // avatar: {
  //   backgroundColor: red[500],
  // },
}))
function Cardd(props) {
  const classes = useStyles();
    return (
        <div>
             
             <Card className={classes.root}>
     
      <CardMedia
        className={classes.media}
        image={props.image}
        title="My Project"
      />
      <CardContent>
        <Typography className={classes.heading} variant="body1" color="textSecondary">
        {props.heading}
        </Typography>
        <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
          {props.details}
        </Typography>
      </CardContent>

      <CardActions>
        <Button className={classes.margin} href={props.href} target="_blank" variant="outlined" >
          Live Demo
        </Button>
      </CardActions>
        </Card>
      </div>
    )
}

export default Cardd;
