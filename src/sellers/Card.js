import { CCard, CCardBody, CCardTitle, CCardImage, CCardText, CButton } from '@coreui/react'
// import { useState } from 'react';

import OverlayModule from './OverlayModule';

function Card(props) {
  let currentSeller = props.data;


  return (
  <div className="sellercard">
    <CCard style={{ width: '16rem' }}>
      <CCardBody>
        <CCardTitle>Name: {currentSeller.name}</CCardTitle>
        <br/>
        {/* <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle> */}
        <CCardText> Phone: {currentSeller.phone} </CCardText>
        <CCardText> Address: {currentSeller.address} </CCardText>
        <CCardText> Pin Code: {currentSeller.pincode} </CCardText>
        {currentSeller.verified === "1"
          ? <CCardText> Verified User: YES </CCardText>
          : <CCardText> Verified User: NO </CCardText>
        }
        <CButton color="success" size='lg' onClick={() => {
          return (
            <OverlayModule popupData={{data:currentSeller, visibility:true }}/>
          )
        }}>Previous Orders</CButton>
      </CCardBody>
    </CCard>

  </div>
  )
}

export default Card;
