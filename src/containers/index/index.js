import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter, Link } from 'dva/router'
import { getMenuList } from '../hooks';

import './index.scss'
import Hello from '../hello';
import MenuContent from '../menuContent'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Index = props => {
    const [menuList, setMenuList] = useState([])
    const [menuCheck, setMenuCheck] = useState([]);
    const [menuContent, setMenuContent] = useState([]);
    const [show, setShow] = useState(true)
    useEffect(() => {
        getMenuList().then(res => {
            setMenuList(res.data.content || [])
            const hash = props?.location?.hash || '';
            setMenuCheck([hash.length ? hash.slice(1) : '/'])
            setShow(props?.location?.pathname.indexOf('/create') === -1)
        })
    }, [])

    const onChange = item => {
        setMenuCheck([item.path || '/'])
        window.history.replaceState(null, null, `${props?.location?.pathname}#${item.path}`)
        props.onChange && props.onChange(item)
    }

    const renderMenuItem = item => {
        if (item.children) {
            return (
                <SubMenu key={item.path} title={item.name}>
                    {
                        item.children.map(it => renderMenuItem(it))
                    }
                </SubMenu>
            )
        } else {
            return <Menu.Item key={item.path} onClick={() => onChange(item)}>{item.name}</Menu.Item>
        }
    }
    
    return (
        <div className='warp'>
            <Layout>
                <Header className="header">
                    后台管理系统
                    {
                        !!show && <Link to="/create">创建新的菜单</Link>
                    }
                </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={menuCheck}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    {
                        menuList.map(item => renderMenuItem(item))
                    }
                </Menu>
            </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                    >
                        {
                            (menuCheck.length && (menuCheck[0] === '/'))
                              ? <Hello /> : <MenuContent menuContent={menuContent} />
                        }
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default withRouter(Index);
