import React from 'react'
import './score-box.css'
const ScoreBox = ({scores}) => {
    return (
        <div className='score-box'>
            <div className='score-box--scores'>
                <div className='score-box--scores--header'>
                <p className='p' >ROCK </p>
                <p className='p' >PAPER </p>
                <p className='p'>SCISSORS</p>
                </div>
                
              <div className ='score-box--scores--div'><span className='score-text'>scores</span><span className='score-number'>{scores}</span></div>
            </div>
        </div>
    )
}

export default ScoreBox



