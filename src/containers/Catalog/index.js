import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Navbar, Grid } from './styles'
import ProductCard from '../../components/ProductCard'
const Catalog = ({ productList }) => {
  return (
    <Fragment>
      <Container>
        <Navbar>
          <div>New Arrival</div>
          <div>Special</div>
          <div>Featured</div>
        </Navbar>
        <Grid>
          {productList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}
const mapStateToProps = state => {
  console.log(state)
  return {
    productList: state.productList,
  }
}
export default connect(mapStateToProps, null)(Catalog)
