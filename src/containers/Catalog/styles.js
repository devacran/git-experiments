import styled from 'styled-components'

export const Grid = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  background-color: #dcdcdc;
`
export const NavbarLink = styled.div``
export const Container = styled.div`
  width: 100%;
  padding-top: 30px;
  background-color: #dcdcdc;
`
export const Navbar = styled.div`
  display: flex;
  height: 2em;
  align-items: center;
  margin-bottom: 20px;
  div {
    margin: 0 2em;
  }
`
