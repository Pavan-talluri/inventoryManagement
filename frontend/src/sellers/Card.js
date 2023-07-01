import { CCard, CCardBody, CCardTitle, CCardImage, CCardText, CButton } from '@coreui/react'
import { React, useState } from 'react';

import OverlayModule from './OverlayModule';
// import OverlayModule2 from './OverlayModule2';

function Card(props) {
  let currentSeller = props.data;
  const [overlayShow, setOverlayShow] = useState(false);

  return (
  <div className="sellercard">
    <CCard style={{ width: '16rem', margin: '1rem' }}>
      <CCardBody>
        <CCardTitle>Name: {currentSeller.name}</CCardTitle>
        <br/>
        {/* <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle> */}
        <CCardText> Phone: {currentSeller.phone} </CCardText>
        <CCardText> Address: {currentSeller.address} </CCardText>
        <CCardText> Pin Code: {currentSeller.pincode} </CCardText>
        <CButton color="success" size='lg' onClick={() => {
            setOverlayShow(true);
            console.log(`card: ${currentSeller.name}`);
            // setOverlayShow(false);
        }}>Previous Orders</CButton>
        {overlayShow ? <OverlayModule data={currentSeller.previousOrders} name={currentSeller.name}/> : <br/>}
      </CCardBody>
    </CCard>

  </div>
  )
}

export default Card;
