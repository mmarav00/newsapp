import React from 'react';
import Drawer from './Drawer';
import './navbar.scss';

const Navbar = ({setCategory}) => {
    return (
    <div className ="nav"> 
            <Drawer setCategory={setCategory}/>
           
    </div>
    )
}

export default Navbar