import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid transparent;
  ${props =>
    props.styleType !== 'wish' &&
    css`
      background-color: white;
    `}
`
export const ImgContainer = styled.div`
  position: relative;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  margin: 10px;
  background-color: green;
  ${props =>
    props.styleType === 'wish' &&
    css`
      margin: 0px;
      width: 100%;
      height: 100%;
    `}
`
export const WishButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  img {
    width: 100%;
    height: 100%;
  }
`
//cambiar esta por img
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
