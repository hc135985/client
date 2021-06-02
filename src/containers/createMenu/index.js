import React, { useState } from 'react'
import Index from '../index'
import { _getMenuDetail } from '@/api/menu'
import './index.scss'

import CreateMenuItem from './components/createMenuItem/index';

const CreateMenu = () => {
  const [type, setType] = useState('');
  const [content, setContent] = useState({})
  const [menu, setMenu] = useState({});
  const onChange = item => {
    setMenu(item)
    if (item.id) {
      _getMenuDetail(item.id).then(res => {
        console.log(res.data, 'content')
        let content = {};
        try {
          content = JSON.parse(res.data.content)
        } catch (error) {
          console.log(error)
          content = {}
        }
        console.log(content, 'content')
        setContent(content)
      })
    }
  }

  const setFormData = (values, i, del) => {
    let children = content.formData.children;
    if (del && i) {
      children = children.filter((it, ind) => ind !== i)
    }else if (i && i !== -1) {
      children[i] = values;
    } else {
      children.push(values)
    }
    content.formData.children = children;
    setContent(JSON.parse(JSON.stringify(content)))
  }

  const SelectType = e => {
    console.log(e)
  }
  return (
    <div className="create">
      <div className="left">
          <CreateMenuItem
            onSelect={e => SelectType(e)}
            menu={menu}
            setFormData={setFormData}
            content={content}
          />
      </div>
      <div className="content"><Index onChange={onChange} content={content} /></div>
    </div>
  )
}

export default CreateMenu;
