import React from 'react'
import './itemes.css'

const Items = ({red,blue,yellow,imgeurl}) => {
    return (
        <div className='item'>
      <div className={`${ red ? 'red': ''}${ blue ? 'blue' : ''}${yellow ? 'yellow' : '' } border`}>
       
                <div className='img-div'>
                    <img src={imgeurl} alt='item'/>
                </div>
     </div>
    </div>
    )
}

export default Items
