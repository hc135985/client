import React from 'react'
import {
    DownOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const indexMenu = [
    {
        key: 'indexMenu-1-1',
        icon: <DownOutlined />,
        title: '首页管理',
        children: [
            {
                key: 'indexMenu-1-1-1',
                icon: <AppstoreOutlined />,
                title: '首页轮播',
                path: '/index/home'
            }
        ]
    },
    {
        key: 'indexMenu-1-2',
        icon: <MenuUnfoldOutlined />,
        title: '商品管理',
        children: [
            {
                key: 'indexMenu-1-2-1',
                icon: <MenuFoldOutlined />,
                title: '商品列表',
                path: '/index/productlist'
            },
            {
                key: 'indexMenu-1-2-2',
                icon: <PieChartOutlined />,
                title: '商品一级列表',
                path: '/index/productone',
            },
            {
                key: 'indexMenu-1-2-3',
                icon: <DesktopOutlined />,
                title: '商品二级列表',
                path: '/index/producttwo',
            },
            {
                key: 'indexMenu-1-2-4',
                icon: <ContainerOutlined />,
                title: '评论列表',
                path: '/index/comment',
            }
        ]
    },
    {
        key: 'indexMenu-1-3',
        icon: <MenuFoldOutlined />,
        title: '地址订单',
        children: [
            {
                key: 'indexMenu-1-3-1',
                icon: <MailOutlined />,
                title: '地址列表',
                path: '/index/address',
            },
            {
                key: 'indexMenu-1-3-2',
                icon: <DesktopOutlined />,
                title: '订单列表',
                path: '/index/order',
            }
        ]
    }
]


export default indexMenu;
