import React from "react"
import Navbar from './Navbar'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import 'react-masonry-css'
import avatar from './Images/deer.png'
import avatarr from './Images/wolf.png'
import './masonry.css'
import Typography from '@material-ui/core/Typography'
import Helmet from 'react-helmet'
import Card from './Cardd'
import CardData from './CardData'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles((theme) => ({
    typo:{
        padding: theme.spacing(5, 1),
      
      ...theme.mixins.toolbar,
    },
    uppertext:{
        textAlign:'center',
         color:'tan',
         fontFamily:'Dancing Script',
         margin: '0',
         opacity:'.3',
         fontSize:'5rem',
         lineHeight:'1.2rem'
      },
      lowertext:{
        textAlign:'center',
         color:'tan',
         margin: '0',
         fontSize:'2.2rem',
      }
}));

var items = [
    {id: 1, name: 'My First Item'},
    {id: 2, name: 'Another item'},
    {id: 3, name: 'Third Item'},
    {id: 4, name: 'Here is the Fourth'},
    {id: 5, name: 'High Five'}
  ];

  const Tryy = () => {
    
        const classes = useStyles();
  const theme = useTheme();
        return (
            items = items.map(function(item) {
                return <div key={item.id} style={{color:'red', height:'200px'}}>{item.name}</div>
              }),

              <>
                <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"></link>
        </Helmet>
              <Navbar/>
                  <Typography className={classes.uppertext} variant="h3" component="h3">
                    My Project Work
                </Typography>
                <Typography className={classes.lowertext} variant="h3" component="h3">
                My Portfolio
                </Typography>

            <Container>
                {/* grid layout */}
            <ResponsiveMasonry className={classes.typo}
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} gutterBottom
        >
            <Masonry className="my-masonry-grid_column" >
                 {
                    CardData.map((val, ind)=>{
                    return <Card
                    image={val.image}
                    heading={val.heading}
                    details={val.details}
                    href={val.href}
                        />
                    })    
                 }
                 
                    
            </Masonry>
        </ResponsiveMasonry>
        </Container>
                </>
        )
    }


export default Tryy;