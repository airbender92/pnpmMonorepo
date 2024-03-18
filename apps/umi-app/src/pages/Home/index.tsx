import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import GraphComponent from '@src/components/GraphComponent'
import styles from './index.less';


const HomePage: React.FC = () => {
  const { name } = useModel('global');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
    <GraphComponent containerId='graphContainer'></GraphComponent>

        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
