import React, { Fragment } from 'react'
import { Container, Input, Icon } from './styles.js'
const SearchBox = () => {
  return (
    <Fragment>
      <Container>
        <Input placeholder="SEARCH"></Input>
        <Icon>GO</Icon>
      </Container>
    </Fragment>
  )
}
export default SearchBox
