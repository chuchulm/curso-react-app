import React from 'react'

import logo from '../ImgBandanas/negra.jpg'
import Bandana1 from '../ImgBandanas/puntoblanco1.jpg'
import Bandana2 from '../ImgBandanas/negrablanca.jpg'
import Bandana3 from '../ImgBandanas/puntoblanco2.jpg'
import Bandana4 from '../ImgBandanas/puntoblanco4.jpg'
import Bandana5 from '../ImgBandanas/roja.jpg'
import Bandana6 from '../ImgBandanas/puntoblanco3.jpg'
import { Card } from 'antd'
import Cabecera from './Cabecera'

const { Meta } = Card

function Bandanas() {
  return (
    <div className="App">
      <nav>
        {' '}
        <Cabecera />{' '}
      </nav>

      <header className="App-header">
        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={logo} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={Bandana1} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={Bandana2} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={Bandana3} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={Bandana4} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={Bandana5} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <Card
          hoverable
          style={{ width: 900 }}
          cover={<img alt="example" src={Bandana6} alt="logo" />}>
          <Meta title="LEMOM.ACCESORIOS" description="www.instagram.com" />
        </Card>

        <p>
          <h2 className="colorbutton"></h2>
        </p>

        <a className="App-link">
          <div></div>
        </a>
      </header>
    </div>
  )
}

export default Bandanas
