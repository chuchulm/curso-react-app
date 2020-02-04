import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import Contenido from './Components/Relleno'
import Inicio from './Components/Inicio'
import Bandanas from './Components/Bandanas'
import { BrowserRouter, Route, Link,  } from 'react-router-dom';







const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class menu1 extends React.Component {
    

render () {
    return (
      <BrowserRouter>
      <Layout>

    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                INICIO
              </span>
            }
          >
            <Menu.Item key="1"><Link to="/inicio">Logo</Link></Menu.Item>  
            <Menu.Item key="2"><Link to="/Bandanas">Bandanas</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/Contenido">Accesorios</Link></Menu.Item>
            
          </SubMenu>
          <SubMenu
            key="sub2"
            
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                Siguenos
              </span>
            }
          >
            <Menu.Item key="9">Instagram
            <a
            href="https://www.instagram.com/lemom.accesorios/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer">
            </a>
          </Menu.Item>

            <Menu.Item key="9">Mercadolibre
            <a
            href="https://articulo.mercadolibre.com.ve/MLV-548476421-bandanas-cintillos-diademas-de-alambre-_JM?searchVariation=45877697021#searchVariation=45877697021&position=3&type=item&tracking_id=a93b2e7e-edcb-4da7-a059-8e62437a3c11"
          target="_blank"
          rel="noopener noreferrer">
            </a>
          </Menu.Item>
            
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 0px 0px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
         
        </Breadcrumb>
        <Content>
        <Route exact path="/Contenido">
           \\FALTA CONTENIDO accesorios crear ruta para accesorios\\
          </Route>
          <Route exact path="/inicio">
            <div> <Inicio/> </div>
          </Route>
          <Route path="/bandanas">
          <div> <Bandanas/> </div>
          </Route>
          
        </Content>
      </Layout>
    </Layout>
  </Layout>
  </BrowserRouter>  
    );
  }
}
export default menu1;

