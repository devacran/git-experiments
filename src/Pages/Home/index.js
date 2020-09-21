import React, { Fragment } from 'react'
import Template from '../../components/Template'
import Banner from '../../components/Banner'
import Catalog from '../../containers/Catalog'
const Home = () => {
  return (
    <Fragment>
      <Template>
        <Banner />
        <Catalog />
      </Template>
    </Fragment>
  )
}

export default Home
