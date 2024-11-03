import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdCart } from 'react-icons/io'
import { FaSearch, FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import SearchSection from '../search/SearchSection'
import { IoMenuSharp } from 'react-icons/io5'
export default function Navbar() {
  return (
    <div className='navbar'>
      <IoMenuSharp className='menu' />
      <h2>T.Shop</h2>
      <ul className='nav_links'>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
        <NavLink to={"/ProductDetails"}>ProductDetails</NavLink>
        </li>
        <li>
        <NavLink to={"/x"}>NewArrivals</NavLink>
        </li>
        <li>
        <NavLink to={"/y"}>Brands</NavLink>
        </li>
      </ul>
      <SearchSection />
      <div className='icons'>
      <FaSearch className='icon' />
      <IoMdCart />
      <FaUser />
      </div>
    </div>
  )
}
