import React, { useState, useEffect } from 'react'
import { Form, Input, Cascader, Button, message, Tabs } from 'antd';
import { getMenuList } from '@/containers/hooks'
import { _addMenu, _getMenuDetail } from '@/api/menu'
import FormSelect from '../FormSelect'
import './index.scss'

const { TabPane } = Tabs;

const SelectType = ({ menu, setFormData, content = {}, updateContent }) => {
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

  const { formData = {} } = content;

  const createOnFinish = value => {
    const { parentMenu, menuName: name, path } = value;
    _addMenu({
      path,
      name,
      parentMenu: parentMenu?.length ? parentMenu[parentMenu.length - 1] : ''
    }).then(res => {
        if (res.data.status === 1) {
        message.success(res.data.message, 1, () => {
          window.location.reload();
        })
      } else {
        message.error(res.data.message)
      }
    })
  }

  const CreateMenuName = ({ type }) => {
    const text = type === 'add' ? '创建' : '编辑';
    const isEdit = type === 'update';
    let parentMenu = []
    if (isEdit && menu.path) {
      const path = menu.path.slice(0, menu.path.lastIndexOf('/'))
      path.split('/').forEach((e, i) => {
        if (i === 0) return;
        parentMenu.push(i === 1 ? `/${e}` : `${parentMenu[i-2]}/${e}`)
      })
    }

    return (
      <div>
        <h3 className="center">
          {text}菜单
        </h3>

        <Form onFinish={createOnFinish}>
          <Form.Item
            label="菜单名称"
            name="menuName"
            rules={[{ required: true, message: '菜单名称不可为空' }]}
          >
            <Input value={menu.name || ''} />
          </Form.Item>
          <Form.Item
            label="菜单路径"
            name="path"
            rules={[{ required: true, message: '菜单路径不可为空' }]}
          >
            <Input disabled={isEdit} value={menu.path && menu.path.slice(menu.path.lastIndexOf('/') - 1) || ''} />
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
              disabled={isEdit}
              changeOnSelect
              value={parentMenu}
              placeholder="请选择父级，不选为一级"
            >
            </Cascader>
          </Form.Item>
          <Form.Item>
              <Button type="primary" htmlType="submit">确认{text}</Button>
              {
                !!(isEdit) && <Button type="error">删除</Button>
              }
          </Form.Item>
        </Form>
      </div>
    )
  }

  const CreateFrom = () => {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="筛选条件" key="1">
          <FormSelect formData={formData?.children || []} setFormData={setFormData} updateContent={updateContent} />
        </TabPane>
        <TabPane tab="表格展示" key="2">2</TabPane>
        <TabPane tab="编辑菜单" key="3"><CreateMenuName type="update" /></TabPane>
      </Tabs>
    )
  }

  return (
    <div>
      {
        content.id ? <CreateFrom/> : <CreateMenuName type="add" />
      }
    </div>
  )
}

export default SelectType;
