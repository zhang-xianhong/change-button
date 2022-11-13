import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

/**
 * @description List列表数据中卡片头部展示信息
 * @param {string} title 名称
 * @param {element} icon 图标
 * @param {number} count 数值
 */
export default function NsCardTitle(props) {
  const {
    style, title, icon, count, ...otherProps
  } = props;
  return (
    <div className="cardTitle" style={{ ...style }} {...otherProps}>
      <div>{title}</div>
      <div className="titleIcon">
        <span>{icon}</span>
        <span>{count}</span>
      </div>
    </div>
  );
}

NsCardTitle.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string,
  icon: PropTypes.element,
  count: PropTypes.number
};
