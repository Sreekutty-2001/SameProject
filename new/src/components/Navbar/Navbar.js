import { Avatar, Badge, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    return (

        <div id='logo' className="d-flex justify-content-between ">
          <NavLink to={"/"}><img src={zomatologo} style={{ width: "12rem", height: "1.8rem", marginTop: 37, marginLeft: 50, cursor: "pointer" }} alt='' /></NavLink>   
            {/* <h1 style={{ color: "#1b1464", cursor: "pointer", }} className="mt-3">Search Filter App</h1> */}

            <div style={{  width: "50vw" }} className="login-signup">
                <NavLink style={{ textDecoration: "none"  }} to={"/login"}><Button variant="text">Login</Button></NavLink>
                <NavLink style={{ textDecoration: "none" }} to={"/signup"}><Button variant="text">Sign Up</Button></NavLink>
                <Badge badgeContent={1} color="warning">
                <i style={{fontSize:25}} class="fa-solid fa-cart-shopping"></i>
                </Badge>
                <Avatar alt="Sreekutty" src="/static/images/avatar/1.jpg" />
            </div>

        </div>
    )
}

export default Navbar