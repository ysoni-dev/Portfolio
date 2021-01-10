import React from 'react'
import avatar from './Images/furn.png'
import image from './Images/bakery.png'
import image7 from './Images/bakery7.png'
import weather1 from './Images/weather1.png'
import weather2 from './Images/weather2.png'
import weather3 from './Images/weather3.png'
import business from './Images/business.png'
import business2 from './Images/business2.png'
import portfolio from './Images/portfolio.png'




const CardData = [
    {
        image : avatar,
        heading : 'Woodcraft',
        details : [
            'Its an E-commerce website for Furniture and Home Decor. This website provides various of items to decorate your beautiful home.',<br></br>,<br></br>,
            'Woodcraft is a highly creative, modern, visually stunning and responsive multipurpose website' ],
                   href : '',
    },
          
    {
        image : weather1,
        heading : 'WeatherApp',
        details : [
            'Its an PWA web app (Progressive Web App) for Weather forecast and a combination of StopWatch. This app install on both (Desktop as well as Mobile) devices.',<br></br>,<br></br>,
            'WeatherApp is a highly creative, modern, visually stunning and responsive multipurpose app'             
        ],
        href : 'https://ysoni-dev.github.io/WeatherappStopwatch/',
    },
    {
        image : image,
        heading : 'Crems',
        details : [
            'Its an E-commerce website for Sweets Bakery. This website provides varieties of Sweets, Chocolates and other Bakery products.',<br></br>,<br></br>,
            'Crems is a highly creative, modern, visually stunning and responsive multipurpose website',
        ],
        href : 'https://ysoni-dev.github.io/crems/',
    },
    {
        image : business,
        heading : 'Ysoni Company',
        details : [
            'It is an E-commerce website for selling premium websites at relevant prices. Its an E-Company of talented developer for designing and developing premium websites',<br></br>,<br></br>,
            'Ysoni com. is a highly creative, modern, visually stunning and responsive multipurpose website',
        ],
        href : 'https://ysoni-dev.github.io/React-project/',
    },
    {
        image : portfolio,
        heading : '',
        details : [
                '',
        ],
        href : '',
    },
    {
        image :business2,
        heading : 'Portfolio',
        details : [
            'It is an Portfolio Website that showcase the amount of work and qualification to get growth in development career.',<br></br>,<br></br>,
            'Portfolio is a highly creative, modern, visually stunning and responsive multipurpose website',
        ],
        href : '',
    },
]


export default CardData
