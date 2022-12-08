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
            <div style={{height:"60vh"}} className="header">

                <div id='logo' className="d-flex justify-content-between ">
                    <img src={zomatologo} style={{ width: "12rem", height: "1.8rem", marginTop: 37, marginLeft: 50, cursor: "pointer" }} alt='' />
                    {/* <h1 style={{ color: "#1b1464", cursor: "pointer", }} className="mt-3">Search Filter App</h1> */}
                    <ul className='lists'>
                        <li id='login'>Log in</li>
                        <li id='signin'>Sign up</li>

                    </ul>
                </div>
                <div className="writting">
<h2 className='Title-writting'> Here We Introduce The World Of Taste For You 🍴</h2>

                </div>

                <div id='search' className='d-flex justify-content-center  mt-5'>
                    <Form id="form">
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Control style={{ width: "27rem",height:"3.5rem",borderRadius: "8px 0px 0px 8px" }} type="text"
                                onChange={(e) => changeData(e.target.value)}
                                placeholder="Search Restaurant" />
                        </Form.Group>
                    </Form>
                        <Button id='Search-button' className='button-text-light' style={{ background: "#ed4c67", width: "10rem", border: "none",height:"3.5rem",marginBottom:16 }}>Submit</Button>
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