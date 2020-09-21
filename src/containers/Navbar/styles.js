import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const LeftSide = styled.div`
  display: flex;
  width: 70%;
  padding: 0 3em;
  justify-content: space-between;
  align-content: center;
  font-size: 18px;
`
export const RightSide = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`
export const Container = styled.div`
  display: flex;
  height: 2em;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
export const NavbarLink = styled.div``
export const CartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  color: black;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const WishButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  color: black;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const Buttons = styled.div`
  display: flex;
  width: 6em;
`
