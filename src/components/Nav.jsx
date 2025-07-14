import React from "react";
import logoImg from "../../src/assets/logo.jpg";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div>
      <ul className='nav-upper flex-space-around hover:text-amber-50'>
        <li className='nav__list text-xl font-semibold hover:text-orange-500'>
          <Link className="" to='/home'>Home</Link>
        </li>
        <li className='nav__list text-xl font-semibold hover:text-orange-500'>
          <Link to='/shop'>Shop</Link>
        </li>
        <li className='nav__list text-xl font-semibold hover:text-orange-500'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav__list '>
          <Link to='/cart'>
            <i className='bi bi-cart3 text-4xl hover:text-fuchsia-500'></i>
          </Link>
        </li>
        <div className='flex justify-center items-center gap-4 text-lg'>
          <li className='nav__list '>
            <Link to='/login'>Login</Link>
          </li>
          <li className='nav__list '>
            <Link to='/sign-up'>SignUp</Link>
          </li>
          <li className='nav__list'>
            <Link to='/profile'>
              <img
                className='profile-icon ring-amber-300'
                src={logoImg}
                alt='profile icon'
              />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
