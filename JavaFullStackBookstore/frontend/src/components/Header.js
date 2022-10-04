import React from 'react'
import Nav from './Nav'
import Banner from './Banner'

const Header = ({ loggedIn }) => {
  return (
    <div>
      {loggedIn ?
        <Nav /> : <Banner />}
    </div>
  )
}

export default Header;