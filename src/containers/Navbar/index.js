import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchBox from '../../components/SearchBox'
import wishIconInactive from '../../assets/WishIconInactive.png'
import cart from '../../assets/cart.svg'
import {
  Container,
  NavbarContainer,
  NavbarLink,
  CartButton,
  WishButton,
  Buttons,
  LeftSide,
  RightSide,
} from './styles'
const Navbar = ({ myWishList }) => {
  const menuLinks = [
    { title: 'New Arrivals', link: '' },
    { title: 'Clothing', link: '' },
    { title: 'Sports', link: '' },
    { title: 'The Brand', link: '' },
    { title: 'Accesories', link: '' },
    { title: 'Sale', link: '' },
  ]
  return (
    <Fragment>
      <Container>
        <LeftSide>
          {menuLinks.map((el, index) => (
            <NavbarLink key={index} to={el.link}>
              {el.title}
            </NavbarLink>
          ))}
        </LeftSide>
        <RightSide>
          <SearchBox />
          <Buttons>
            <CartButton>
              <Link to="/">
                <img src={cart} />
              </Link>
              <span> </span>
            </CartButton>
            <WishButton>
              <Link to="/wishlist">
                <img src={wishIconInactive} />
              </Link>
              <span>{myWishList.length}</span>
            </WishButton>
          </Buttons>
        </RightSide>
      </Container>
    </Fragment>
  )
}
const mapStateToProps = props => ({
  myWishList: props.myWishList,
})
export default connect(mapStateToProps, null)(Navbar)
