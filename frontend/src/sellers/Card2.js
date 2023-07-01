import { CCard, CCardBody, CCardTitle, CCardImage, CCardText, CButton } from '@coreui/react'
import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import OverlayModule2 from './OverlayModule2';

function Card2(props) {
  let currentSeller = props.data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

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
        <CButton color="success" size='lg' onClick={() => {setShow(true)}}>Previous Orders</CButton>
      </CCardBody>
    </CCard>

    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {currentSeller.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { currentSeller.previousOrders.length > 0
            ? <OverlayModule2 data={currentSeller.previousOrders}/>
            : <h3> No Previous Orders </h3>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
          <Button variant="primary" onClick={handleClose}> Save Changes </Button>
        </Modal.Footer>
      </Modal>
    </div>

  </div>
  )
}

export default Card2;
