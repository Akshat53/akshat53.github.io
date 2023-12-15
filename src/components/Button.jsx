import React from 'react'
import { Button, } from 'antd';

const AppButton = (props) => {
    const {label,icon,onClick} = props 
  return (
    <Button  shape="round" icon={icon} onClick={onClick} >
    {label}
  </Button>
  )
}

export default AppButton