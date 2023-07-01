import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function OverlayModule2(props) {

  let data = props.data;
  let cnt = 1;

  return (
    <div>
        {
          data.map((x) => {
            return (
              <>
                <h3> <u> <b> Order: {cnt++} </b> </u> </h3>
                <h3> Status: {x.status} </h3>
                <h3> Total Price (Rs): {x.totalPriceInRupees} </h3>
                <h3> Price Due (Rs): {x.priceDue} </h3>
                <h3> Date of Order: {x.orderDate} </h3>
                <h3> Order Due Date: {x.orderDueDate} </h3>
                <h3> Order Completion date: {x.orderCompletionDate} </h3>
                <br/>
                {
                  x.itemList.map((it) => {
                    return (<h4> {it.item}: {it.amount} </h4>)
                  })
                }
                <div className='line'></div>
                <hr/>
                <br/>
              </>
            )
          })
        }
    </div>
  );
}

export default OverlayModule2;