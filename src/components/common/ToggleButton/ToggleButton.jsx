import React, { useState } from 'react'
import './ToggleButton.scss'

const ToggleButton = (props) => {
    const [hasFocus, setFocus] = useState(true);
    const handleClickone = () => {
        hasFocus ? setFocus(false) : setFocus(true)
        props.getToggleStatus('Recurring')
    }
    const handleClickO = () => {
        setFocus(false)
        props.getToggleStatus('OneTIme')
    }
    return (
        <div className='toggle'>
            <p className='input-title'>{props.title}</p>
            <button className={hasFocus ? 'button-focuse' : 'button'} onClick={handleClickone}>Recurring</button>
            <button className='button' onClick={handleClickO}>One time</button>
        </div>
    )
}
export default ToggleButton