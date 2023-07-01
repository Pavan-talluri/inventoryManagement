import { CButton, CModal, CModalBody, CModalHeader, CModalFooter, CModalTitle } from '@coreui/react';
import { React, useState } from 'react';


function OverlayModule(props){
  let currentSeller = props.popupData.data;
  const [visible, setVisible] = useState(props.popupData.visibility);

  return (
    <div>
      <CModal alignment="center" scrollable visible={visible} onClose={() => {
          setVisible(false)
        }}>
      <CModalHeader>
        <CModalTitle>{currentSeller.name}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => {
            setVisible(false)
          }}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
    </div>
  )
}

export default OverlayModule;
