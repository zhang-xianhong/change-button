import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.less';

/**
 * @description 树形结构中统计指定类型（如帐户）名称、数量
 * @param {number} count 数值
 * @param {string} countName 展示名称
 * @param {element} countIcon 图标
 */
export default function NsCountTitle(props) {
  const {
    style, count, countName, countIcon
  } = props;
  return (
    count ? (
      <>
        {countIcon}
        <span className={classes.countTitle} style={{ marginLeft: countIcon ? 8 : 0, ...style }}>
          {countName}
          （
          {count}
          ）
        </span>
      </>
    ) : null
  );
}

NsCountTitle.propTypes = {
  style: PropTypes.object,
  count: PropTypes.number,
  countName: PropTypes.string,
  countIcon: PropTypes.element
};
