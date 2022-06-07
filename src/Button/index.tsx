import React from 'react';
import { Button as AntBtn } from 'antd';
import './index.less';

const Button: React.FC<any> = () => {
  return <AntBtn type="primary">按钮</AntBtn>;
};

export default Button;
