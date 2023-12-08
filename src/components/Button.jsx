import React from 'react'
import { Button, } from 'antd';

const AppButton = (props) => {
    const {label,icon} = props 
  return (
    <Button  shape="round" icon={icon} >
    {label}
  </Button>
  )
}

export default AppButton