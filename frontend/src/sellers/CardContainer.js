import { CContainer } from '@coreui/react'
import { React, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl'


import Card2 from './Card2';
import data from './sellerList.json';


function CardContainer() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [bank_IFSC, setBank_IFSC] = useState("");
  const [bank_account, setBank_account] = useState("");


  // add radio buttons under seller, to choose what items they would sell, and link them with the corresponding items from the back-end
  let sellerObject = {
    "id": `${data.info.length}`,
    "info": {
      "name": "",
      "phone": "",
      "email": "",
      "bank_IFSC": "",
      "bank_account": "",
      "address": "",
      "pincode": "",
      "previousOrders": [],
      "currentOrder": []
    }
  }

  function handleFormClose(){
    setEmail("");
    setName("");
    setAddress("");
    setBank_IFSC("");
    setBank_account("");
    setPhone("");
    setPincode("");

    setShow(false);
  }

  // new seller is added temporarily, and removed once the page is refreshed
  // backend crud here - also for update and delete
  async function updateNewSeller(){
    sellerObject.info.name = name
    sellerObject.info.email = email
    sellerObject.info.address = address
    sellerObject.info.bank_IFSC = bank_IFSC
    sellerObject.info.bank_account = bank_account
    sellerObject.info.phone = phone
    sellerObject.info.pincode = pincode

    await handleFormClose();
    data.info.push(sellerObject)
    console.log(sellerObject)
    console.log(data.info)
  }


  return (
    <CContainer>
      <h2> seller card container</h2>

      <Button onClick={() => setShow(true)}> Add New Seller </Button>

      <Modal variant="success" show={show} onHide={(() => setShow(false))}>
        <Modal.Header closeButton>
          <Modal.Title> New Seller details </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
        <Form>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name as in Aadhar" onChange={(e) => setName(e.target.value)}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Eg., 9124509123" onChange={(e) => setPhone(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Bank IFSC code </Form.Label>
            <Form.Control type="text" placeholder="Eg: SBIN0000123" onChange={(e) => setBank_IFSC(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Bank Account </Form.Label>
            <Form.Control type="text" placeholder="Eg., aas123123123" onChange={(e) => setBank_account(e.target.value)} />
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="" placeholder="" />
          </Form.Group> */}

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Pin Code </Form.Label>
            <Form.Control type="text" placeholder="5xxxxx" onChange={(e) => setPincode(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Address proof document</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Digital Signature</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

        </Form>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleFormClose}> Close </Button>
          <Button variant="primary" onClick={updateNewSeller}> Save Changes </Button>
        </Modal.Footer>
      </Modal>
      {
        data.info.map((x) => {
          return <Card2 data={x.info}/>
        })
      }
    </CContainer>
  )
}

export default CardContainer;