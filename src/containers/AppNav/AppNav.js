import { MenuIcon, XIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../../utils/config/nav-items'
import { useOutsideClick } from '../../utils/hooks/use-outside-click'
import { Searcher } from '../Searcher/Searcher'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

const AppNavLink = ({ props }) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => {
        return 'block py-2 px-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white' +
        (isActive ? ' text-primary/100 dark:text-primary' : '')
      }}
    >{props.label}
    </NavLink>
  )
}

const Menu = ({ props }) => {
  return (
    <ul className='flex flex-col mt-4 justify-center items-center md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium'>
      {NAV_ITEMS.map(item => {
        return (
          <li key={item.id}>
            <AppNavLink props={item} />
          </li>
        )
      })}
    </ul>
  )
}

export const AppNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef()

  useOutsideClick(mobileMenuRef, () => {
    if (isOpen) setIsOpen(false)
  })

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const mobileMenuClasses = clsx(
    'transition-transform bg-white dark:bg-bgdark shadow-lg fixed inset-y-0 left-0 w-[300px] z-50 md:hidden font-medium pt-10',
    { 'translate-x-[-300px]': !isOpen },
    { 'translate-x-0': isOpen }
  )

  return (
    <nav className='shadow-md bg-white border-gray-200 h-[74px] flex items-center dark:bg-bgdark'>
      <div className='container px-4 flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            <span className='text-primary'>React</span> Movies
          </span>
        </Link>
        <div className='flex items-center'>
          <Searcher />
          <ThemeToggle />
          <button
            onClick={(evt) => {
              evt.stopPropagation()
              setIsOpen(!isOpen)
            }}
            data-collapse-toggle='mobile-menu'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none'
            aria-controls='mobile-menu'
          >
            <span className='sr-only'>Open main menu</span>
            {isOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
          </button>
          <div className={mobileMenuClasses} id='mobile-menu' ref={mobileMenuRef}>
            <Menu />
          </div>
          <div className='hidden ml-4 md:block relative w-auto' id='desktop-menu'>
            <Menu />
          </div>
        </div>
      </div>
    </nav>
  )
}
