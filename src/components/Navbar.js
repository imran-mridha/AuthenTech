import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('LogOut Success!!', { autoClose: 500 });
        navigate('/')
      })
  }
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-gray-900 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>AuthenTech</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900'>
            Home
          </Link>
          {user?.uid ?
            <>
              <Link to='/profile' className='mr-5 hover:text-gray-900'>
                Profile
              </Link>
              <Link to='/wallet' className='mr-5 hover:text-gray-900'>
                Wallet
              </Link>
              <button onClick={handleLogOut} className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
                Logout
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </>
            :
            <>
              <Link to='/login' className='mr-5 hover:text-gray-900'>
                Login
              </Link>
            </>
          }
        </nav>
      </div>
    </header>
  )
}

export default Navbar