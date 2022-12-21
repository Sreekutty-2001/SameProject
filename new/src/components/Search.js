import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import './Style.css'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Button from 'react-bootstrap/Button';
import Set from './Set'

const Search = () => {
    const [fdata] = useState(Fooddata);
    console.log(fdata);
    const [copydata, setCopyData] = useState([]);

    // console.log(copydata); 


    const changeData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata === "") {

            setCopyData(fdata);

        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.name.toLowerCase().match(getchangedata);
            });
            setCopyData(storedata)
        }
    }


    useEffect(() => {
        setTimeout(() => {
            setCopyData(Fooddata)
        }, 1000)

    }, [])

    return (
        <>
            <div style={{ height: "60vh" }} className="header">

               
                <div className="writting">
                    <h2 className='Title-writting'> Here We Introduce The World Of Taste For You 🍴</h2>

                </div>

                <div id='search' className='d-flex justify-content-center  mt-3'>
                    <Form id="form">
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control style={{ width: "27rem", height: "3.5rem", borderRadius: "8px 0px 0px 8px" }} type="text"
                                onChange={(e) => changeData(e.target.value)}
                                placeholder="Search Restaurant" />
                        </Form.Group>
                    </Form>
                    <Button id='Search-button' className='button-text-light' style={{ background: "#ed4c67", width: "10rem", border: "none", height: "3.5rem", marginBottom: 16 }}>Submit</Button>
                </div>


            </div>
            <section className='item-section'>
                {/* <h2 className='Open' style={{ fontWeight: 400 }}> Restaurants are Open Now </h2> */}
                <div >
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set sdata={fdata} />}
                </div>

            </section>

        </>

    )
}

export default Search