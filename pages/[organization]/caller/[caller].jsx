import React, { useEffect, useContext, memo } from 'react';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../../../styles/pages/Index.module.scss';
import GlobalContext from '../../../Contexts/GlobalContext';
import { get } from '../../../utils/api-calls';
import Header from '../../../Components/Header';
import CallersComponent from '../../../Components/CallersComponent';
import fadeIn from '../../../utils/animations';

function Caller({ apiRes, caller, organization }) {
  const { setTasks } = useContext(GlobalContext);

  useEffect(() => {
    setTasks(apiRes);
  }, []);

  return (
    <motion.div className={styles.page} exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Header title={`${caller} Tasks`} />

      <motion.main variants={fadeIn} className={styles.container}>
        <h1>
          {caller}
          {' '}
          (
          {organization}
          )
          {' '}
          - TASKS
        </h1>

        <CallersComponent />
      </motion.main>
    </motion.div>
  );
}

Caller.propTypes = {
  apiRes: PropTypes.array,
  caller: PropTypes.string,
  organization: PropTypes.string,
};

export async function getServerSideProps({ query }) {
  const { organization, caller } = query;
  const apiRes = await get(`${process.env.ENVIRONMENT}/api/tasks/organizations/${organization}/${caller}`) ?? null;

  return {
    props: { apiRes, caller, organization },
  };
}

export default memo(Caller);
