import React, { Fragment } from 'react'
import { Container, Description, Title, Delete } from './styles.js'
import { connect } from 'react-redux'
import { deleteFavorite } from '../../actions'
import ProductCard from '../ProductCard'
const WishItem = props => {
  const { product } = props
  const handleClick = () => {
    props.deleteFavorite(product.id)
  }
  return (
    <Fragment>
      <Container>
        <ProductCard styleType="wish" product={product} />
        <Description>
          <Title>{product.name}</Title>
          <Delete onClick={handleClick}>Eliminar de mi lista [ - ]</Delete>
        </Description>
      </Container>
    </Fragment>
  )
}
const mapDispatchToProps = {
  deleteFavorite,
}
export default connect(null, mapDispatchToProps)(WishItem)
