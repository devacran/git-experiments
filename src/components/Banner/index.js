import React from 'react'
import banner from '../../assets/banner.jpg'
import { Container, Img } from './styles'

const Banner = () => {
  return (
    <Container>
      <Img src={banner} />
    </Container>
  )
}
export default Banner
