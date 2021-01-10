import React from 'react'
import Navbar from './Navbar'
import Typography from '@material-ui/core/Typography'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import IconButton from '@material-ui/core/IconButton';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import StopSharpIcon from '@material-ui/icons/StopSharp';
import {makeStyles, useTheme} from '@material-ui/styles'
import 'react-vertical-timeline-component/style.min.css';
import Helmet from 'react-helmet'
import Divider from '@material-ui/core/Divider';
import divider from './Images/divider3.png'

const useStyles = makeStyles((themes) =>({
  uppertext:{
    textAlign:'center',
     color:'tan',
     fontFamily:'Dancing Script',
     margin: '0',
     opacity:'.2',
     fontSize:'5rem',
     lineHeight:'1.2rem'
  },
  lowertext:{
    textAlign:'center',
     color:'tan',
     margin: '0',
     fontSize:'2rem',
  }

}))


const Resume = () => {
  const classes = useStyles();
  const theme = useTheme();
    return (
        <>
        <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
        </Helmet>
        <Navbar/>
        <Typography className={classes.uppertext} variant="h4" component="h4">
        Qualification
      </Typography>
      <Typography className={classes.lowertext} variant="h4" component="h4" gutterBottom >
      Qualification
      </Typography>
      {/* <img src={divider} height="40px" width="100%" style={{opacity:'0.5'}}></img> */}

      <br></br>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(46, 37, 24, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(46, 37, 24, .5)' }}
    date="2014 - Xth Standard"
    iconStyle={{ background: 'rgb(46, 37, 24)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">D.S.Memorial Public School</h3>
    <h4 className="vertical-timeline-element-subtitle">7.4 CGPA</h4>
    <p>
     Subject: English, Math, Science, SocialScience, Hindi
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0, .5)' }}
    date="2016 - XIIth Standard"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">G.R.Memorial Public School</h3>
    <h4 className="vertical-timeline-element-subtitle">63% Marks</h4>
    <p>
      Subject: Physics, Chemistry, English, ComputerScience, PhysicalEdu. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(30, 45, 29, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(30, 45, 29, .5)' }}
    date="2016 - 2019  Bachelors In Computer Application"
    iconStyle={{ background: 'rgb(52, 130, 103)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bharati Vidyapeeth School of Distance Education</h3>
    <h4 className="vertical-timeline-element-subtitle">63.3% First Class</h4>
    <p>
      No Backlog No Rage
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(164, 74, 40, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(164, 74, 40, .5)' }}
    date="2019 - till 2022  Masters in Computer Application"
    iconStyle={{ background: 'rgb(130, 69, 52)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bharati Vidyapeeth School of Distance Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Nill</h4>
    <p>
      Nill
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(0, 25, 51, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 25, 51, .5)' }}
    date="2016 - 2020  Software Engineerng Diploma"
    iconStyle={{ background: 'rgb(0,25,51)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">GNIIT Programme in Cloud and Mobile Software Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
    By Niit
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(114, 9, 0, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(114, 9, 0, .5)' }}
    date="August 2020"
    iconStyle={{ background: 'rgb(143, 14, 23)', color: '#fff' }}
    icon={<CodeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Started React js</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(0, 51, 51, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0, 51, 51, .5)' }}
    date="September 2020"
    iconStyle={{ background: 'rgb(0, 51, 51)', color: '#fff' }}
    icon={<CodeIcon />}
  >
    <h3 className="vertical-timeline-element-title">First React Project</h3>
    <h4 className="vertical-timeline-element-subtitle">Business Website</h4>
    <p>
      React js, Bootstrap5
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(255, 128, 0, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 128, 0, .5)' }}
    date="October 2020"
    iconStyle={{ background: 'rgb(240, 144, 26)', color: '#fff' }}
    icon={<CodeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Second React Project</h3>
    <h4 className="vertical-timeline-element-subtitle">WeatherApp + Stopwatch</h4>
    <p>
      React js, Bootstrap5, ServiceWorker, React-Slider, OpenWeatherAPI
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(32, 32, 32, .5)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(32, 32, 32)' }}
    date="December 2020"
    iconStyle={{ background: 'rgb(32, 32, 32)', color: '#fff' }}
    icon={<CodeIcon />}
  >
    <h3 className="vertical-timeline-element-title">Started Material UI</h3>
    <h4 className="vertical-timeline-element-subtitle">React M-ui</h4>
    <p>
      materialui-core, materialui-icon, materialui-styles
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'red', color: '#fff' }}
    icon={<StopSharpIcon />}
  />
</VerticalTimeline>
           
        </>
    )
}

export default Resume
