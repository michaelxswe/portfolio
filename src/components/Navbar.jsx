import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants/index'
import { styles } from '../styles'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <ul className='list-none hidden sm:flex flex-row gap-10 ml-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('Home')
              window.scrollTo(0, 0)
            }}>
            <p
              className={`hover:text-white text-[18px] font-bold cursor-pointer flex ${
                active === 'Home' ? 'text-white' : 'text-secondary'
              }`}>
              Home
            </p>
          </Link>

          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
