import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Title, Banner } from './styles.js'
import Navbar from '../../containers/Navbar'
const Header = () => {
  return (
    <Fragment>
      <Title>
        <Link to="/">
          <h1>Natstore</h1>
        </Link>
      </Title>
      <Navbar />
      <Banner>FREE DELIVERY ON ALL ORDERS OVER $99</Banner>
    </Fragment>
  )
}
export default Header
