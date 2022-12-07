import React from 'react'
import Card from 'react-bootstrap/Card'
const Cards = ({ data }) => {
  return (
    <div  id="main">
      {
        data.map((element, k) => {
          return (
            <>
            <div>
              <Card style={{ width: '22rem', border: "none" }} className='hove'>
                <Card.Img variant="top" className="cd" src={element.imgdata} />
                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">

                    <h4 className='mt-2'>
                      {element.name}
                    </h4>
                    <span>{element.rating}★</span>
                  </div>
                </div>
                <div className="lower_data d-flex justify-content-between">
                  <h5>
                    {element.address}
                  </h5>
                  <span>
                    {element.price}
                  </span>
                </div>
                <div  className="extra">
                  <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={element.logimage} className="log" alt="" />
                  </div>
                  <div className="somedata">
                    <p>{element.somedata}</p>
                  </div>
                </div>
              </Card>
              </div>

            </>
          )
        })
      }

    </div>
  )
}

export default Cards