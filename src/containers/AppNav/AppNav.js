import { MenuIcon, XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../utils/config/nav-items'
import { Searcher } from '../Searcher/Searcher'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

const AppNavLink = ({ props }) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => {
        return 'block py-2 pr-4 pl-3 text-gray-700 hover:text-gray-900 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white' +
        (isActive ? ' text-primary dark:text-primary' : '')
      }}
    >{props.label}
    </NavLink>
  )
}

export const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuClasses = clsx(
    'transition-all bg-white dark:bg-bgdark shadow-lg md:shadow-none fixed inset-y-0  w-[300px] z-50 md:relative md:inset-0 md:block md:w-auto',
    { 'left-[-300px]': !isOpen },
    { 'left-0': isOpen }
  )

  return (
    <nav className='shadow-md bg-white border-gray-200 py-5 rounded dark:bg-bgdark'>
      <div className='h-[34px] container px-4 flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            <span className='text-primary'>React</span> Movies
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none'
          aria-controls='mobile-menu'
        >
          <span className='sr-only'>Open main menu</span>
          {isOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
        </button>
        <div className={menuClasses} id='mobile-menu'>
          <ul className='flex flex-col mt-4 justify-center items-center md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium'>
            <li>
              <Searcher />
            </li>
            <li>
              <ThemeToggle />
            </li>
            {NAV_ITEMS.map(item => {
              return (
                <li key={item.id}>
                  <AppNavLink props={item} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
