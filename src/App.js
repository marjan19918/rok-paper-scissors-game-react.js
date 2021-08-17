import React, { useEffect, useState } from 'react';
import Items from './components/items/Items'
import ScoreBox from './components/score-box/score-box'
import rulesimg from './images/image-rules.svg'
import './App.css'
import scissors from './images/icon-scissors.svg'
import paper from './images/icon-paper.svg'
import rock from './assets/images/icon-rock.svg'
import Buttons from './components/button/button';
import close from './images/icon-close.svg'
const App = () => {
  const [score, setScore] = useState(0)
  const [firstPick, setFirstPick] = useState('')
  const [housepick,setHousepick]=useState('')
  const [text,setText]=useState('')
  useEffect(() => { countScore(); }, [housepick])
  
  const showSecondPick = () => {
    let a =Math.random()
    // setSeconNumber(a)
   let second=a
     console.log(second)
    if (second < 0.3) {
      setHousepick('rock')
      // return <div><Items red imgeurl={rock} /></div>
    }
   else if (second >= 0.3 && second <= 0.6) {
      setHousepick('paper')
      // console.log(housepick)
      // return <div><Items blue imgeurl={paper} /></div>
    } else if (second>0.6) {
      setHousepick('scissors')
      // return <div><Items yellow imgeurl={scissors} /></div>
    }
    console.log(housepick)
    return housepick
  
  }

  const countScore = () => {
    console.log(firstPick)
    console.log(housepick)
    if ((firstPick === 'paper' && housepick==='rock')||(firstPick==='rock'&& housepick==='scissors')||(firstPick==='scissors' && housepick==='paper') ) {
      // 
     
      // console.log(secondNumber)
      console.log(score)
      // setScore(score.push(score[score.length - 1] + 1))
      setScore(score+1)
      setText('you win')
       console.log(score)
      
    }
     if ((firstPick==='paper'&& housepick==='paper')||(firstPick==='rock' && housepick==='rock')||(firstPick==='scissors' && housepick ==='scissors' )) {
      setText('draw')
    }
     if ((firstPick==='paper' && housepick==='scissors')||(firstPick==='scissors' && housepick==='rock')||(firstPick==='rock'&& housepick==='paper')){
      setText('you lost')
    }
  }
  const resetGame = () => { setFirstPick('')}
  // const scores=()=>{setTimeout(score[score.length-1] ,2000) }
  return (
    <div className='app'>
      <div id='rules-img' className='rules-img'>
        <div className='rules-top'><span className='rule-txt'>Rules</span><img className='rule-close' onClick={()=>document.getElementById('rules-img').style.display='none'} alt='close' src={close} /></div>
        <img src={rulesimg} alt='' rules />
      </div>
      <div className='score-box-cont'>
        <ScoreBox scores={score}  />
      </div>
      {
        firstPick
          ?
          <div className='playground'>
            <div >{firstPick === 'paper' ? <Items blue imgeurl={paper} /> : firstPick === 'rock' ? <Items red imgeurl={rock} /> : <Items yellow imgeurl={scissors} />}</div>
            <div className='win-message'>{text} <div onClick={()=>{resetGame()} }><Buttons  >Play Again</Buttons></div></div>
            {housepick==='rock'?<div><Items red imgeurl={rock} /></div>: housepick==='paper' ?<div><Items blue imgeurl={paper} /></div>:<div><Items yellow imgeurl={scissors} /></div>}
           
          </div>
          :
          <div className='item-container'>
            <div className='paper-container' value='paper' onClick={() => { setFirstPick('paper');showSecondPick();console.log(score)}}><Items blue imgeurl={paper} /></div>
            <div className='scissors-container' onClick={() => {setFirstPick('scissors');showSecondPick() }}><Items yellow imgeurl={scissors} /></div>
        <div className='rock-container' onClick={()=>{setFirstPick('rock');showSecondPick()}}><Items red imgeurl={rock} /></div>
      </div>
      }
     
      <div className='rule-btn-cont' onClick={() => { document.getElementById('rules-img').style.display='block' }}>
        <Buttons rules  >rules</Buttons>
      </div>
      
    </div>
   
  )
}
export default App
