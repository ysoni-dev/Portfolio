import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import './Home.css'
import Particles from 'react-particles-js'
import  {makeStyles}  from '@material-ui/styles'

const useStyles = makeStyles({
   particlesCanva: {
       position:'absolute',
       opacity:'0.3',
   }
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
        <Particles canvasClassName={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value:35,
                        density:{
                            enable:'true',
                            
                        }
                    },
                    shape:{
                        type:'circle',
                        stroke:{
                            width:3,
                            color:'black'
                        },  
                    },
                    size:{
                        value:3,
                    }
                }
            }}
        />  
         <Navbar/>
         <Header/>
        </>
    )
}

export default Home
