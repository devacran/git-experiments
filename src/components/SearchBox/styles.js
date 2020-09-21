import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  height: 100%;
  width: -webkit-fill-available;
  a:visited {
    color: white;
  }
`
export const Input = styled.input`
  padding-left: 1em;
  border: none;
  outline: none;
`
//cambiar por icono
export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 2em;
  color: white;
  background-color: black;
`
