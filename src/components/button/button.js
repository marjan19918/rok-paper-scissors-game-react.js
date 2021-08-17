import React from 'react'
import './button.css'
const Buttons = ({children,rules}) => {
    return (
        <div>
            <button className={rules ? 'rules' : 'play'}>{children}</button>
        </div>
    )
}

export default Buttons
