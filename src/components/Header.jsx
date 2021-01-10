import React from 'react';
import ReactDom from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Box} from '@material-ui/core'
import Typed from 'react-typed'
import avater from '../components/Images/deer.png'
import {useSpring, animated} from 'react-spring'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    '& > *': {
      margin: theme.spacing(0.1),
    },
    padding: theme.spacing(3, 1),
      
      ...theme.mixins.toolbar,
  },
  card1:{
    position:'absolute',
    backgroundSize:'cover',
    backgroundPosition:'center center',
    willChange:'transform',
    width: '38ch',
    height: '42ch',
    backgroundImage:`url(${avater})`
  },
  container: {
    height:'300px',
   
    width:'300px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
      color:'tan',
      textAlign:'center',

  },
  subtitle:{
      color:"grey",
      textAlign:'center'
  }
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

export default function Header() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const classes = useStyles();

  return (
      <>
    <div className={classes.root}>
    <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div className={classes.card1} style={{ transform: props.xy.interpolate(trans1) }} 
          />
          </div>
    </div>
    <Typography className={classes.title} variant="h3">
                <Typed
                    strings={["Yogesh Soni"]}
                    typeSpeed={40}
                />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={[
                        "Web Design",
                        "Web Development",
                        "React Dev"
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop

                />
            </Typography>
    </>
  );
}
