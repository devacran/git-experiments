import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setWishItem, deleteFavorite } from '../../actions'
import { Container, ImgContainer, Img, WishButton } from './styles'
import wishIconActive from '../../assets/WishIconActive.png'
import wishIconInactive from '../../assets/WishIconInactive.png'

const ProductCard = props => {
  const { styleType, product } = props
  const isFav = product.isFavorite
  const handleClick = () => {
    !isFav && props.setWishItem(product)
    isFav && props.deleteFavorite(product.id)
  }
  return (
    <Container styleType={styleType}>
      <ImgContainer styleType={styleType}>
        {styleType !== 'wish' && (
          <WishButton>
            <a onClick={handleClick}>
              {!isFav && <img src={wishIconInactive} />}
            </a>
            <a onClick={handleClick}>{isFav && <img src={wishIconActive} />}</a>
          </WishButton>
        )}
        <Img src={product.img} />
      </ImgContainer>
    </Container>
  )
}
const mapDispatchToProps = {
  setWishItem,
  deleteFavorite,
}
export default connect(null, mapDispatchToProps)(ProductCard)
