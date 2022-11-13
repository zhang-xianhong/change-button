import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const NsButton = (props) => {
  console.log('props', props);
  // const permission = {
  //   0: 'visitor',
  //   1: 'admin',
  //   2: 'superAdmin'
  // };
  // 从localStorage中取出当前登录用户的权限列表
  // const { roleRights } = JSON.parse(localStorage.getItem('token'));

  const {
    type, style, children, permission, ...otherProps
  } = props;
  return (
    <Button type={type || 'default'} style={{ fontSize: 14, ...style }} disabled={permission === 0} {...otherProps}>{children}</Button>
  );
};

NsButton.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  permission: PropTypes.number
};

export default NsButton;
