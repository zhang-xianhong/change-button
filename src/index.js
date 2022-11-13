import React from 'react';
import ReactDOM from 'react-dom';
import { LinkOutlined, ApartmentOutlined, ClockCircleFilled } from '@ant-design/icons';
// import 'antd/dist/antd.less';
import '../theme/antd.overrides.less';
import {
  ChangeButton,
  NsButton,
  NsCardTitle,
  NsSelect,
  NsStateMark,
  NsTableNameDesc,
  NsCountTitle
} from './components';

const App = () => (
  <div style={{ margin: 'auto', width: 500 }}>
    <ChangeButton tip="hi" icon="edit" type="danger" />
    <br />
    <NsButton type="primary">删除</NsButton>
    <NsCardTitle title="cardTitle" count={9} icon={<LinkOutlined />} />
    <NsCountTitle count={7} countName="默认" countIcon={<ApartmentOutlined />} style={{ color: '#f00' }} />
    <NsCardTitle title="需要审计" icon={<LinkOutlined />} count={555} />
    <NsStateMark style={{ background: '#f5242426', color: '#f52222', }} stateIcon={<ClockCircleFilled />} stateName="冻结" />
  </div>
);

// 要实现局部热更新，必须要添加此句
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
