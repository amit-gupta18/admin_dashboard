import React from 'react'
import { Popover, Button } from 'antd'

const CurrentUser = () => {
  return (
    <>
      <Popover
        placement="bottomRight"
        trigger="click"
        styles={{
          root: { zIndex: 999 },
          body: { padding: 0 },
        }}
      >
        TEST
      </Popover>
    </>
  )
}

export default CurrentUser