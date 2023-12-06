import React from "react";

import { Dropdown, Button } from "antd";

const Dropdown = () => {
  return (
    <Dropdown menu={{ navOptions }} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
  );
};

export default Dropdown;
