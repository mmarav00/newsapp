import React from 'react';
import Drawer from './Drawer';
import './navbar.scss';

const Navbar = ({setCategory}) => {
    return (
    <div className ="nav">
        <div className ="icon">
            <Drawer setCategory={setCategory}/>
            </div>
    </div>
    )
}

export default Navbar