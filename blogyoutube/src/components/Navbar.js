import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex justify-between p-10 items-center'>
        <h2 className='text-3xl'>LOGO</h2>
        <ul className='flex gap-6'>
            <li>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li>
                <Link to='/createblog'>
                Create New Blog
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar