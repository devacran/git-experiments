import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
`
export const Title = styled.h2`
  grid-column: span 2;
`
export const Btn = styled.div`
  text-align: center;
  line-height: 30px;
  background-color: black;
  padding: 5px;
  color: white;
  width: 100px;
  height: 30px;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const Nav = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: 1em;
  }
`
