import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './Collapse.scss'
import TextField from '../TextFiled/TextField';
import {
    PLAN_NAME,
    PLACEHOLDER2,
    PLACEHOLDER3,
    PLACEHOLDER4,
    Bill_No,
    BILL_EVERY,
    PRICE,
    DESC3,
    BILLING_TYPE
} from '../../../constants/textConfig'
import { faAngleUp, faAngleDown, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToggleButton from '../ToggleButton/ToggleButton';
import { addPlan } from '../../../reduxStores/actions/allActions';

const Collapsible = ({
    bill,
    billNo,
    planName,
    price,
    billType,
    select
}) => {
    const [checkbillType, setBillType] = useState(true)
    const [checkData, setCheckData] = useState(true)
    const [checkPrice, setCheckPrice] = useState('')
    const [checkPlan, setCheckPlan] = useState('')
    const [checkBill, setCheckBill] = useState('')
    const [checkNo, setCheckNo] = useState('')
    const [checkSelect, setCheckSelect] = useState('')
    const [active, setActive] = useState('Active')
    const { number, setNumber } = useState(true)
    const dispatch = useDispatch();

    const getToggleStatus = (data) => {
        data === 'Recurring' ? setBillType(true) : setBillType(false)
    }
    const validatePrice = (data) => {
        console.log('Price', data)
        setCheckPrice(data)

    }
    const validatePlan = (data) => {
        console.log('Plan', data)
        setCheckPlan(data)
    }
    const validateBill = (data) => {
        console.log('Bill', data)
        setCheckBill(data)
    }
    const validateNo = (data) => {
        console.log('no', data)
        setCheckNo(data)
    }
    const validateSelect = (data) => {
        console.log('Select', data)
        setCheckSelect(data)
    }
    const handleAddPlan = () => {
        if (checkPrice && checkPlan) {
            setCheckData(true)
            dispatch(addPlan({
                planName: checkPlan,
                price: checkPrice,
                billNo: checkNo,
                bill: checkBill,
                select: checkSelect,
                billType: checkbillType
            }))
        } else {
            alert('Plane Name & Price is required!')
        }
    }
    const [open, setOPen] = useState(true);
    const toggle = () => {
        setOPen(!open);
    }

    return (
        <div className={open ? 'plan' : 'otherplan'}>
            <hr className='plan-divider' />
            <div className='toggle-button' >
                {checkData && (
                    <>
                        <label className='labelPlan'>{planName}</label>
                        <label className='labelStatus'>{active}</label>
                        <label className='labelPrice'>${price}</label>
                        <span className='toggle-menu' >
                            {
                                <FontAwesomeIcon icon={faEllipsis} />
                            }
                        </span>
                        <span onClick={toggle} className='toggle-arrow'>
                            {
                                open ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />
                            }
                        </span>
                    </>)
                }
            </div>
            <div className={open ? "content-show" : "content-parent"}>
                <div className='collapse-content'>
                    <div className='plan-input'>
                        <TextField placeholder={PLACEHOLDER2} title={PLAN_NAME} validatePlan={validatePlan} value={planName} />
                    </div>
                    <div className='plan-type'>
                        <ToggleButton placeholder={PLACEHOLDER3} title={BILLING_TYPE} getToggleStatus={getToggleStatus} value={billType} />
                    </div>
                </div>
                <div className='collapse-content'>
                    <div className='plan-input'>
                        <TextField placeholder={PLACEHOLDER4} title={PRICE} validatePrice={validatePrice} type={number} value={price} />
                    </div>
                    {checkbillType && (
                        <>
                            <div className='plan-bille'>
                                <div className='plan-every'>
                                    <TextField title={BILL_EVERY} type={number} validateBill={validateBill} value={bill} />
                                </div>
                                <div className='plan-select'>
                                    <TextField select={true} validateSelect={validateSelect} value={select} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {checkbillType && (
                    <>
                        <div className='plan-price'>
                            <TextField placeholder={PLACEHOLDER3} title={Bill_No} type={number} validateNo={validateNo} valu={billNo} />
                        </div>
                        <p className='price-desc'>{DESC3}</p>

                    </>
                )}
                <hr className='divider-productInfo' />
                <div className='btnAdd'>
                    <button className='btnAddPlan' type="button" onClick={handleAddPlan}>+ Add Another Plan</button>
                </div>
            </div>


        </div>
    )
}
export default Collapsible;