import React, { useState } from 'react'
import Index from '../index'
import './index.scss'

import SelectType from './components/selectType/index';

const CreateMenu = () => {
  const [type, setType] = useState('');
  const [menu, setMenu] = useState({});
  const onChange = item => {
    setMenu(item)
  }
  return (
    <div className="create">
      <div className="left">
          <SelectType
            onSelect={e => SelectType(e)}
            menu={menu}
          />
      </div>
      <div className="content"><Index onChange={onChange} /></div>
      <div className="right"></div>
    </div>
  )
}

export default CreateMenu;
