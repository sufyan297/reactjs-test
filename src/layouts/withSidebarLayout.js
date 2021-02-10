import React from 'react';
import { Helmet } from 'react-helmet'
import { Layout, Menu, Breadcrumb, Row, Col, Button} from 'antd';
import { get } from 'lodash';
import Axios from 'axios';

import { inject, observer } from 'mobx-react';

import { 
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  QuestionOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MyIcons = {
  dashboard: DashboardOutlined,
  team: TeamOutlined,
  question: QuestionOutlined
}

//CSS
// import '../css/style.scss';

const withSidebarLayout = (WrappedComponent, extra) => {
  return inject(['userStore'])(observer(class SidebarLayout extends React.Component {
    state = {
      collapsed: false,
      menuItems: []
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    }

    async componentDidMount() {
      const resp = await Axios({
        method: 'GET',
        url: 'https://api.npoint.io/6b2cfa078b09e6eb3856',
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json'
      });
      this.setState({menuItems: resp.data });
    }

    hasChildren(item, t) {
      const tmpChild = [];
      console.log(t);
      let Icon = MyIcons['question'];
      if (MyIcons[item.icon]) {
        Icon = MyIcons[item.icon] || MyIcons['question'];
      }
      get(item, 'children', []).map((child, index) => {
        if (get(child, 'children.length', 0) > 0) {
          console.log("has Child? ", child);
          const tmp = this.hasChildren(child, 'Rock');
          tmpChild.push(tmp);
        } else {
          let SubIcon = MyIcons['question'];
          if (MyIcons[child.icon]) {
            SubIcon = MyIcons[child.icon] || MyIcons['question'];
          }
          const url = get(item, 'url', '/');
          tmpChild.push(
            <Menu.Item key={url} onClick={() => this.props.history.push(url)} icon={<SubIcon />}>{child.name}</Menu.Item>
          )
        }
      });
      return (
        <SubMenu key={'sub' + item.name} icon={<Icon />} title={item.name}>
          {tmpChild}
        </SubMenu>
      )
    }

    generateMenu() {
      const { menuItems } = this.state;
      if (get(menuItems, 'length', 0) > 0) {
        const tmpMenu = [];
        menuItems.map((item, index) => {
          let Icon = MyIcons['question'];
          if (MyIcons[item.icon]) {
            Icon = MyIcons[item.icon] || MyIcons['question'];
          }
          if (item && get(item, 'children.length', 0) > 0) {
            const tmp = this.hasChildren(item);
            tmpMenu.push(tmp);
          } else {
            //Single Item
            const url = get(item, 'url', '/');
            tmpMenu.push(<Menu.Item key={url} onClick={() => this.props.history.push(url)} icon={<Icon />}>{item.name}</Menu.Item>);
          }
        });
        return tmpMenu;
      }
      return null;   
    }
    
    onLogout() {
      this.props.history.push('/login');
    }
    
    render() {
      console.log("Location: ",this.props.location);
      return (
        <>
          <Helmet>
            <title>{extra.title || 'Dashboard'}</title>
          </Helmet>

          <Layout style={{ minHeight: '100vh' }}>
            <Sider theme={'light'} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <div className="logo" style={{paddingBottom: 20 }}>
                <img src="http://acmelogos.com/images/logo-1.svg" style={{marginLeft: 15, marginTop: 10}} />
              </div>
              <Menu theme="light" defaultSelectedKeys={[get(this.props, 'location.pathname', '/')]} mode="inline">
                {this.generateMenu()}
              </Menu>
            </Sider>

            <Layout className="site-layout">
            <Header className="site-layout-sub-header-background" style={{ padding: 0, background: '#fff', display: 'flex', justifyContent: 'flex-end', paddingRight: 10 }}>
              <Row>
                <Col style={{paddingRight: 10}}>
                  Welcome {get(this.props, 'userStore.user', null)}
                </Col>
                <Col>
                  <Button type="primary" size={'large'} onClick={() => this.onLogout()}>
                    Logout
                  </Button>
                </Col>
              </Row>
            </Header>

              <Content style={{ margin: '0 16px' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          
                  <WrappedComponent {...this.props} />
          
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Copyright &copy; 2021</Footer>
            </Layout>
          </Layout>
        </>
      )
    }
  }));
}
// export default inject(['userStore'])(observer(withSidebarLayout));
export default withSidebarLayout;