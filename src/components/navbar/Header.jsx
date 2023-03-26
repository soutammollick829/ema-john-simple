import React from 'react';
import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <>
  <div className="navbar bg-neutral-800 h-10 px-10">
  <div className="flex-1">
    <img src={logo} alt="" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-white">
      <li tabIndex={0}>
      <li><a href="/order">Order</a></li>
      <li><a href="/review">Order Review</a></li>
      <li><a href="/inventory">Manage Inventory</a></li>
      <li><a href="/login">Login</a></li>
      </li>
    </ul>
  </div>
</div>
        </>
    );
};

export default Header;