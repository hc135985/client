import React, { useState } from 'react'
import Index from '../index'
import { _getMenuDetail, _menuContentUpdate } from '@/api/menu'
import './index.scss'
import { message } from 'antd'

import CreateMenuItem from './components/createMenuItem/index';

const CreateMenu = () => {
  const [type, setType] = useState('');
  const [content, setContent] = useState({})
  const [menu, setMenu] = useState({});
  const onChange = item => {
    setMenu(item)
    if (item.id) {
      _getMenuDetail(item.id).then(res => {
        if (res.data.status === 1 && (typeof res.data.content === 'object')) {
          setContent({
            ...res.data.content,
            id: res.data.id || 0
          })
        }
      })
    }
  }

  const setFormData = (values, i, del) => {
    let children = content?.formData?.children || [];
    if (del && i) {
      children = children.filter((it, ind) => ind !== i)
    }else if (i && i !== -1) {
      children[i] = values;
    } else {
      children.push(values)
    }
    content.formData || (content.formData = {})
    content.formData.children = children;
    setContent(JSON.parse(JSON.stringify(content)))
  }

  const updateContent = () => {
    _menuContentUpdate({ content: JSON.stringify(content), id: content.id }).then(res => {
      message[res.data.status === 1 ? 'success' : 'error'](res.data.content)
    })
  }

  const SelectType = e => {
    console.log(e)
  }
  return (
    <div className="create">
      <div className="left">
          <CreateMenuItem
            menu={menu}
            onSelect={e => SelectType(e)}
            setFormData={setFormData}
            content={content}
            updateContent={updateContent}
          />
      </div>
      <div className="content"><Index onChange={onChange} content={content} /></div>
    </div>
  )
}

export default CreateMenu;
