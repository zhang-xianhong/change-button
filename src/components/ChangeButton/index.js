import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Button } from 'antd';

const TooltipButton = (props) => {
  console.log('1111props', props);
  const {
    children, tip, placement, ...restProps
  } = props;
  return (
    <Tooltip title={tip} placement={placement}>
      <Button {...restProps}>{children}</Button>
    </Tooltip>
  );
};

TooltipButton.propTypes = {
  tip: PropTypes.string,
  placement: PropTypes.string
};

TooltipButton.defaultProps = {
  placement: 'top'
};

export default TooltipButton;
