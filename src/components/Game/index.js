import React, { useState } from 'react'
import { Fab, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor( max * 2 ) - max)
}
function Game(){


  const [ score, setScore ] = useState(0)
  const [ top, setTop ] = useState(0)
  const [ left, setLeft ] = useState(0)
  const [ backgroundColor, setBackgroundColor ] = useState('#FFF')
  const [ titleVisible, setTitleVisible ] = useState(true)

  const onTap = (event, info) => {
    setScore(score + 1)
    setTop(getRandomInt(Math.min(window.innerHeight-info.point.y, info.point.y)))
    setLeft(getRandomInt(Math.min(window.innerWidth-info.point.x, info.point.x)))
    setBackgroundColor('hsl(' + 360 * Math.random() + ',' +
    (50 + 50 * Math.random()) + '%,' + 
    (40 + 20 * Math.random()) + '%)')
    setTitleVisible(false)
  }
  
  return(
    <div 
      style={{
        backgroundColor,
        transition: 'background-color 0.3s ease-in',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
    {titleVisible ?
    <Typography 
      color='secondary'
      variant='h1' 
      component='h2' 
      align='center'
      style={{marginTop:200}}
    >
      Aiden's Game
    </Typography> : null}
    <motion.div 
      animate={{x: left, y: top
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
        duration: 0.3,
      }}
      onTap={onTap}
      whileTap={{ scale: 0.8 }}
      style={{
        height: 76,
        width: 76,
        borderRadius: '50%',
        margin: '-38px -38px',
        position: 'absolute',
        top: `50vh`,
        left: `50vw`,
        cursor: 'pointer',
      }}
    >
      <Fab color='primary'>
        {score}
      </Fab>
    </motion.div>
    </div>
  ) 
}
export default Game