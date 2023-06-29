import { CContainer } from '@coreui/react'


import Card from './Card';
import data from './sellerList.json';


function CardContainer() {
  return (
    <CContainer>
      <h2> seller card container</h2>
      {
        data.info.map((x) => {
          return <Card key={x.id} value={x.id} data={x.info}/>
        })
      }
    </CContainer>
  )
}

export default CardContainer;