

function CurrentOrders() {
  let NewOrderObject = {
    "id": "",
    "status": "",
    "priceDue": "",
    "paymentStatus": "",
    "itemList": [],
    "totalPriceInRupees": "",
    "orderDate": "",
    "orderDueDate": "",
    "orderCompletionDate": ""
  }

  // update this page based on sellers/CardContainer.js - after connecting to backend - fetch currentOrders among all buyers and sellers - run through the JSON object array

  return (
    <div>

      <h1> current pending orders </h1>

    </div>
  )
}

export default CurrentOrders;
