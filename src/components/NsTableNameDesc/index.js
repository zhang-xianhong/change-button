import React from 'react';
import PropTypes from 'prop-types';
import { getColor } from '../../utils/common';
import classes from './index.less';

/**
 * @description Table表格中一列数据需同时展示图标、名称及描述的情况
 * @param {boolean} showIcon 是否展示图标
 * @param {number} colorIndex 图标索引，一般为id，展示不同背景色
 */

export default function NsTableNameDesc(props) {
  const {
    style, colorIndex, icon, name, description, children, showIcon, ...otherProps
  } = props;
  return (
    <div className="columnInfo" style={{ ...style }}>
      {
        showIcon && (
          <div className={classes.icon}>
            {
              icon ? (<img src={icon} alt="no data" />)
                : (<div style={{ background: getColor(colorIndex), ...style }}>{name[0] && name[0].toUpperCase()}</div>)
            }
          </div>
        )
      }
      <div className={classes.columnDesc} style={{ marginLeft: showIcon ? 8 : 0 }}>
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

NsTableNameDesc.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  colorIndex: PropTypes.number,
  showIcon: PropTypes.bool
};
