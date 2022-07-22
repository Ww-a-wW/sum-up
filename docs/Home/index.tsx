import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { Link } from 'umi';
import classnames from 'classnames';

const Home: React.FC = (props) => {
  return (
    <div className={styles.home}>
      <div className="fs-36 bold">Awjf's warehouse</div>
      <div className={classnames(['fs-16 color-fff', styles.decs])}>努力的代码搬运工</div>
      <Link to="/docs">
        <Button type="primary" shape="round">
          文档
        </Button>
      </Link>
    </div>
  );
};
export default Home;
