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

    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    useEffect(() => {
        setTimeout(() => {
            setCopyData(Fooddata)
        }, 3000)

    }, [])

    return (
        <>
            <div id='logo' className="d-flex justify-content-between ">
                <img src={zomatologo} style={{ width: "12rem", height: "1.8rem", marginTop: 20, cursor: "pointer" }} alt='' />
                <h1 style={{ color: "#1b1464", cursor: "pointer", }} className="mt-3">Search Filter App</h1>
            </div>

            <div id='search' className='d-flex justify-content-center  mt-3'>
                <Form id="form">
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control style={{ width: "20rem" }} type="text"
                            onChange={(e) => changeData(e.target.value)}
                            placeholder="Search Restaurant" />
                    </Form.Group>
                    <Button className='button-text-light' style={{ background: "#ed4c67", width: "10rem", border: "none" }}>Submit</Button>
                </Form>
            </div>


            <section className='item-section'>
                <h2 className='Open' style={{ fontWeight: 400 }}> Restaurants are Open Now </h2>
                <div >
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>

            </section>

        </>

    )
}

export default Search