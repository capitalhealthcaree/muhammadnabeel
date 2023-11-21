import React, { useState, useRef, useEffect } from 'react'
import { Nav as BSNav, Navbar } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import Image from 'next/image'
import api from 'root/utils/api'
import styled from './style'

// Mobile navbar component
const MobileNav = ({ children }) => {
  // Ref for navbar element
  const navbarRef = useRef(null)

  // State to manage the expansion status of the navbar
  const [expanded, setExpanded] = useState(false)

  // Ref for toggle button
  const navbarToggleRef = useRef(null)

  // Ref for menu
  const NavbarMenuRef = useRef(null)

  // Navbar toggler
  const toggleMobileNav = () => {
    setExpanded((preValue) => !preValue)
  }

  useEffect(() => {
    // Function to handle clicks on the navbar toggle
    function handleToggleClick(event) {
      // Check if click was on navbar toggle element
      const targetInToggle = navbarToggleRef?.current?.contains(event.target)

      // If navbar is collapsed and click was on toggle part, expand it
      if (!expanded && targetInToggle) {
        toggleMobileNav()
      }

      // If navbar is already expanded, collapse it
      else if (expanded) {
        toggleMobileNav()
      }
    }

    // Add mouseup event listener to document
    document.addEventListener('mouseup', handleToggleClick)

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mouseup', handleToggleClick)
    }
  }, [expanded])

  return (
    <Navbar
      ref={navbarRef}
      expanded={expanded}
      css={styled.MobileNav}
      className='d-md-block d-lg-none'
      variant='dark'
      expand='lg'
      fixed='top'
    >
      {/* Toggle button */}
      <Navbar.Toggle
        className='_toggler'
        ref={navbarToggleRef}
        aria-controls='nav'
      >
        <span>Menu</span>
      </Navbar.Toggle>

      {/* Navbar collapse */}
      <Navbar.Collapse className='_nav' id='nav'>
        <BSNav ref={NavbarMenuRef} className='me-auto _menu'>
          {children}
        </BSNav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// Component to render the sidebar
const Sidebar = ({ children }) => {
  const [apiData, setApiData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('getAbout')
        setApiData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  // Data to populate sidebar
  const data = {
    toggler: 'Menu',
    status: 'I am a Pharmacist',
    author: 'Khubaib Ali',
  }
  return (
    <header css={styled.Sidebar}>
      {/* Custom scrollbar for the sidebar */}
      <SimpleBar className='d-none d-lg-flex justify-content-center align-items-center _wrapper'>
        <div>
          {/* Header part */}
          <div className='_header'>
            {/* Avatar image */}
            <a style={{ overflow: 'hidden' }} href='#home'>
              <Image
                className='_avatar'
                src={apiData?.data[0]?.imgUrl}
                width={110}
                height={110}
                sizes='110px'
                alt='Profile avatar'
                priority={true}
              />
            </a>

            {/* Author name */}
            <span className='_name'>{data.author}</span>

            {/* Author status */}
            <p className='_status'>{data.status}</p>
          </div>

          {/*  Menu part */}
          <div className='_menu'>
            {/*  Menu items container */}
            <div className='_list'>{children}</div>
          </div>
        </div>
      </SimpleBar>
    </header>
  )
}

// Main component which renders both mobile navbar and sidebar
const Nav = ({ children }) => (
  <>
    <MobileNav>{children}</MobileNav>
    <Sidebar>{children}</Sidebar>
  </>
)

export default Nav
