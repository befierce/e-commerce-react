import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2 id='websitename'>ShopCop</h2>
        <a id='contact'  href='./#'>contact</a>
        <a id='about'  href='./#'>about</a>
        <a id='cart'  href='./#'>cart</a>
    </div>
  )
}


export default Navbar;
