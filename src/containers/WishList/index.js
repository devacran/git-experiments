import React, { Fragment } from 'react'
import { Container, Header, Title, Buttons, Btn, Nav } from './styles'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import WishItem from '../../components/WishItem'
import WishItemEmpty from '../../components/WishItemEmpty'

const WishList = props => {
  const isEmpty = props.myWishList.length === 0 ? true : false
  if (!isEmpty) {
    return (
      <Container>
        <Header>
          <Title>My Wish List</Title>
          <Nav>
            <span>Ordenar Lista</span>
            <span>Eliminar Lista</span>
          </Nav>
          <Buttons>
            <Btn>Share this list</Btn>
          </Buttons>
        </Header>
        {props.myWishList.map((product, index) => (
          <WishItem key={index} product={product} />
        ))}
      </Container>
    )
  }
  return <WishItemEmpty />
}

const mapStateToProps = props => {
  return {
    myWishList: props.myWishList,
  }
}
export default connect(mapStateToProps, null)(WishList)
