import React from 'react'
import { Button, Divider, Flex, Radio } from 'antd';

const AppButton = (props) => {
    const {label,onclick,icon} = props 
  return (
    <Button type="primary" shape="round" icon={icon}>
    {label}
  </Button>
  )
}

export default AppButton