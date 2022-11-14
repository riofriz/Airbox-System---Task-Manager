import React, { useEffect, useContext, memo } from 'react';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../../styles/pages/Index.module.scss';
import GlobalContext from '../../Contexts/GlobalContext';
import { get } from '../../utils/api-calls';
import Header from '../../Components/Header';
import TasksComponent from '../../Components/TasksComponent/index';
import fadeIn from '../../utils/animations';

function Organization({ apiRes, organization }) {
  const { setTasks } = useContext(GlobalContext);

  useEffect(() => {
    setTasks(apiRes);
  }, []);

  return (
    <motion.div className={styles.page} exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Header title={`${organization} Tasks`} />

      <motion.main variants={fadeIn} className={styles.container}>
        <h1>
          {organization}
          {' '}
          - TASKS
        </h1>

        <TasksComponent />
      </motion.main>
    </motion.div>
  );
}

Organization.propTypes = {
  apiRes: PropTypes.array,
  organization: PropTypes.string,
};

export async function getServerSideProps({ query }) {
  const { organization } = query;
  const apiRes = await get(`${process.env.ENVIRONMENT}/api/tasks/organizations/${organization}`) ?? null;

  return {
    props: { apiRes, organization },
  };
}

export default memo(Organization);
