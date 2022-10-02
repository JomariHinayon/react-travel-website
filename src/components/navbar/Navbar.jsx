import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'
import './NavbarStyle.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <h2>BEACHES.</h2>
        </div>
        {/* menu items for desktops */}
        <ul className="nav-menu">
            <li>Home</li>
            <li>Destimation</li>
            <li>Travel</li>
            <li>Book</li>
            <li>Views</li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon'/>
            <BsPerson className='icon'/>
        </div>
        {/* menu items for mobile */}
        <div className='hamburger'>
            <HiOutlineMenuAlt4 />
        </div>
        <div className='mobile-menu'>
            <ul className='mobile-nav'>
                <li>Home</li>
                <li>Destimation</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className="menu-icons">
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='social-icons'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar