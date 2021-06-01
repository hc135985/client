import React, { useEffect, useState } from 'react'

const MenuContent = ({ menuContent }) => {
  const [content, setContent] = useState({});
 
  useEffect(() => {
    console.log(menuContent)
  }, [menuContent]) 

  return (
    <div>
        menuContent
    </div>
  )

}

export default MenuContent;
