import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Helmet from 'react-helmet'
import Container from '@material-ui/core/Container'
import EmailIcon from '@material-ui/icons/EmailOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from './Images/contact1.png'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CloudUploadIcon  from '@material-ui/icons/CloudUpload'
import { Typography } from '@material-ui/core';
import divider from './Images/divider.png';
import mycv from './resume/resume.txt'



class Contact extends React.Component {

  
    render(){
    return (
        <>
        <Helmet>  
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
        </Helmet>
          <Navbar/>  
          <Typography variant="h1" gutterBottom style={
            {fontFamily:'Dancing Script', color:'tan',  textAlign:'center',
            }}>Hire or Contact me!</Typography>
          
            
            <Card style={{background:'transparent',border:'8px'}} variant="outlined">
            <CardContent>
        <div style={
            {fontFamily:'Dancing Script', color:'tan', lineHeight:'1.2rem', fontSize:'2rem', textAlign:'center'
            }}>
            <h4>Email: ysoni1614@gmail.com</h4>
            <h4>Email: ysoni1615@gmail.com</h4>
            <h4>Ph: +91 7011594818</h4>
            <img src={divider} height="100px"></img>
            </div>

            

           <Link to={mycv} target='_blank' download="My resume"><Button variant="outlined" color="secondary" endIcon={<CloudUploadIcon/>} style={{borderBlockColor:'tan', color:'tan',float:'right'}}>
              Download CV
            </Button></Link>
            
           </CardContent>
            </Card>
           
        </>
    )
  }
}

export default Contact
