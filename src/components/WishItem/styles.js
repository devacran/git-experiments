import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
`
export const Description = styled.div`
  position: relative;
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: -webkit-fill-available;
  height: 300px;
`
export const Title = styled.div`
  font-size: 30px;
  text-transform: uppercase;
`
export const Delete = styled(Link)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 30px;
`
