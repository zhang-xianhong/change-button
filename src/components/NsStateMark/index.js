import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description 列表中状态标识展示
 * @param {element} stateIcon 图标
 * @param {string} stateName 名称
 */
export default function NsStateMark(props) {
  const {
    style, stateIcon, stateName, ...otherProps
  } = props;
  return (
    <div
      style={{
        background: '#f5242426',
        color: '#f52222',
        width: '80px',
        height: '22px',
        borderRadius: '10px',
        padding: '0 4px',
        ...style
      }}
      {...otherProps}
    >
      <span style={{ marginRight: 8 }}>{stateIcon}</span>
      <span>{stateName}</span>
    </div>
  );
}

NsStateMark.propTypes = {
  style: PropTypes.object,
  stateIcon: PropTypes.element,
  stateName: PropTypes.string
};
