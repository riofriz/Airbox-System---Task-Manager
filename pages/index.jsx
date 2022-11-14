import React, { useEffect, useContext, memo } from 'react';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../styles/pages/Index.module.scss';
import GlobalContext from '../Contexts/GlobalContext';
import { get } from '../utils/api-calls';
import Header from '../Components/Header';
import TasksComponent from '../Components/TasksComponent/index';
import fadeIn from '../utils/animations';

function Index({ apiRes }) {
  const { setTasks } = useContext(GlobalContext);

  useEffect(() => {
    setTasks(apiRes);
  }, []);

  return (
    <motion.div className={styles.page} exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Header title="Tasks" />

      <motion.main className={styles.container} variants={fadeIn}>
        <h1>TASKS</h1>

        <TasksComponent />
      </motion.main>
    </motion.div>
  );
}

Index.propTypes = {
  apiRes: PropTypes.array,
};

export async function getServerSideProps() {
  const apiRes = await get(`${process.env.ENVIRONMENT}/api/tasks`) ?? null;

  return {
    props: { apiRes },
  };
}

export default memo(Index);
