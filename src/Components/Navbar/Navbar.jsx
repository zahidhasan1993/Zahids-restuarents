import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl font-bold">Zahids <span className='text-red-600'>ResTuarent</span></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><ActiveLink to='/'>Home</ActiveLink></li>
      <li><ActiveLink to='/menu'>Menu</ActiveLink></li>
      
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;