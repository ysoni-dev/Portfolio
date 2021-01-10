import React from 'react'
import ReactDom from 'react-dom'
import avatar from '../components/Images/deer.png'
import Avatar from '@material-ui/core/Avatar'
import makeStyles from '@material-ui/styles/makeStyles'
import {useSpring, animated} from 'react-spring'
import './Try.css'


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`




function Try() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    
    return (
        <>
        <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
          </div>
        </>
    )
}

export default Try;
