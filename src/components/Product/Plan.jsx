import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TextField from '../common/TextFiled/TextField';
import './Plan.scss'
import {
  MAIN_TITLE,
  GENERAL_INFO,
  PRODUCT_NAME,
  PRICING_PLANS,
  PRODUCT_IMAGE,
  OPTIONAL,
  DESC1,
  DESC2,
  PLACEHOLDER1,
} from '../../constants/textConfig'
import Collapsible from '../common/collapse/Collapse';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faTruckLoading, faServer, faL } from '@fortawesome/free-solid-svg-icons';


const Plan = () => {
  const list = useSelector((state) => state.planReducers.list)
  const [flag, setFlag] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const handleClick = () => {
    document.getElementById('selectedFile').click();
  }

  const handleChange = (e) => {
    setUploadFile(e.target.value)
  }

  const handleRemove = () => {
    setUploadFile(null)
  }

  const validateProduct = (data) => {
    console.log('validata', data)
  }
  const handleAddPlan = () => {
    setFlag(true)
  }

  return (
    <div className="create-product">
      <div className="modal-container">

        <p className="modal-container_title">{MAIN_TITLE}</p>
        <div className='product-information'>

          <p className='product-information_title'>{GENERAL_INFO}</p>
          <div className='product-setting'>

            <div className='product-input'>
              <TextField placeholder={PLACEHOLDER1} title={PRODUCT_NAME} validateProduct={validateProduct} />
            </div>

            <div className='product-image'>
              <p className='product-image_title'>{PRODUCT_IMAGE + OPTIONAL}</p>
              <input type='file' id='selectedFile' className='uploadFile' onChange={handleChange} />
              <span onClick={handleClick} id='buttonImage'>
                {uploadFile ?
                  <FontAwesomeIcon icon={faServer} /> : <FontAwesomeIcon icon={faUpload} />}
              </span>
              {uploadFile && (
                <>
                  <div className='uploadSetting'>
                    <span className='edit' onClick={handleClick}>Edit</span>
                    <spana className='remove' onClick={handleRemove}>Remove</spana>
                  </div>
                </>
              )}
              <div className='upload-title'>
                <p className='desc-style'>{DESC1}</p>
              </div>
            </div>

          </div>
          <hr className='divider-productInfo' />
        </div>

        <p className='product-information_title'>{PRICING_PLANS}</p>
        <p className='desc-style_desc2'>{DESC2}</p>
        {list.map((item) => {
          return (
            <Collapsible
              bill={item.bill}
              billNo={item.billNo}
              planName={item.planName}
              price={item.price}
              select={item.select}
              billType={item.billType}
            />
          )
        })}
        {!flag && <button className='btnAddPlan' type="button" onClick={handleAddPlan}>+ Add Another Plan</button>
        }
        {flag && (<>
          <div className='plan-container'><Collapsible /></div>
        </>)}
        <Footer />
      </div>
    </div>
  );
};

export default Plan;
