import { Link } from 'dva/router';
import styles from './index.less';

const Layout = (props) => {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <div className={styles.inner}>
            <nav>
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/course/1336">详情</Link></li>
                <li><Link to="/mycourses">课程</Link></li>
                {/* <li><Link to="/login">登录</Link></li> */} 
              </ul>
            </nav>
        </div>
      </div>
      <div className={styles.view}>
        { props.children }
      </div>
    </div>
  );
};

export default Layout;
