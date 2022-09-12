import React from 'react'
import {
    PLAN_NAME,
    Bill_No,
    BILL_EVERY,
    PRICE,
} from '../../../constants/textConfig'
import './TextField.scss'

const TextField = (props) => {
    const handleChange = (e) => {
        if (props.title === PLAN_NAME) {
            props.validatePlan(e.target.value)
        }
        if (props.title === PRICE) {
            props.validatePrice(e.target.value)
        }
        if (props.title === BILL_EVERY) {
            props.validateBill(e.target.value)
        }
        if (props.title === Bill_No) {
            props.validateNo(e.target.value)
        }
        if (props.select) {
            props.validateSelect(e.target.value)
        }

    }
    return (
        <div>
            <p className='input-title'>{props.title}</p>
            {props.select ?
                <select className='select' onChange={handleChange}>
                    <option>Month(s)</option>
                    <option>Year(s)</option>
                    <option>Week(s)</option>
                    <option>Day(s)</option>
                </select> : <input type='text' className='textInput' placeholder={props.placeholder} onChange={handleChange} value={props.value} />
            }
        </div>
    )
}
export default TextField