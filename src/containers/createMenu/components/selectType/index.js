import React, { useState, useEffect } from 'react'
import { Form, Input, Cascader, Button  } from 'antd';
import { getMenuList } from '@/containers/hooks'
import { _addMenu } from '@/api/menu'
import './index.scss'

const SelectType = ({ menu = {} }) => {
  const [content, setContent] = useState({})
  const [menuList, setMenuList] = useState([])

  const gateList = () => {
    getMenuList().then(res => {
      const list = res.data.content || [];
      setMenuList(list.filter(item => item.path !== '/') || [])
    })
  }

  useEffect(() => {
    gateList();
  }, [])

  useEffect(() => {
    setContent(menu)
  }, [menu])

  const createOnFinish = value => {
    console.log(value, 'value', _addMenu)
    const { parentMenu, menuName: name, path } = value;
    console.log(parentMenu?.length ? parentMenu[parentMenu.length] : '')
    _addMenu({
      path,
      name,
      parentMenu: parentMenu?.length ? parentMenu[parentMenu.length - 1] : ''
    })

  }

  const CreateMenuName = () => {
    return (
      <div>
        <h3 className="center">
          添加菜单
        </h3>

        <Form onFinish={createOnFinish}>
          <Form.Item
            label="菜单名称"
            name="menuName"
            rules={[{ required: true, message: '菜单名称不可为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="菜单路径"
            name="path"
            rules={[{ required: true, message: '菜单路径不可为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="选择父级"
            name="parentMenu"
          >
            <Cascader
              options={menuList}
              fieldNames={{
                label: 'name',
                value: 'path'
              }}
              changeOnSelect
              placeholder="请选择父级，不选为一级"
            >
            </Cascader>
          </Form.Item>
          <Form.Item>
              <Button type="primary" htmlType="submit">确认创建</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }

  const CreateFrom = () => {
    return (
      <div>666</div>
    )
  }

  return (
    <div>
      {
        (content.name && content.path !== '/') ? <CreateFrom/> : <CreateMenuName />
      }
    </div>
  )
}

export default SelectType;
