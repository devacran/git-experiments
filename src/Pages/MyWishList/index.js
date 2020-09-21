import React, { Fragment } from 'react'
import WishList from '../../containers/WishList'
import Template from '../../components/Template'
import { Container, Menu } from './styles.js'
const MyWishList = () => {
  return (
    <Fragment>
      <Template>
        <Container>
          <Menu />
          <WishList />
        </Container>
      </Template>
    </Fragment>
  )
}

export default MyWishList
