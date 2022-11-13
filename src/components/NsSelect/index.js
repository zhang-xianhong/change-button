import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import { Select } from 'antd';
import classes from './index.less';

const { Option } = Select;

export { Option };

/**
 * @description Select选择框
 * @param {array || object} options=[{ label, value }] 选择项
 * @param {string} fixedId 绑定的父级Id
 */

export default function NsSelect(props) {
  const {
    style, fixedId, children, options, ...otherProps
  } = props;
  return (
    <Select
      style={{ width: '100%', ...style }}
      getPopupContainer={triggerNode => (fixedId ? document.getElementById(fixedId) : triggerNode.parentNode)}
      {...otherProps}
    >
      {
        Array.isArray(options) ? options.map(item => <Option value={item.value}>{item.label}</Option>) : Object.keys(options).map(item => <Option value={item}>{options[item]}</Option>)
      }
    </Select>
  );
}

NsSelect.propTypes = {
  style: PropTypes.object,
  fixedId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
