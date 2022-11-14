import React, { useState, useMemo, memo } from 'react';
import { PropTypes } from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import GlobalContext from '../Contexts/GlobalContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [tasks, setTasks] = useState([]);
  const TasksMemo = useMemo(() => ({ tasks, setTasks }), [tasks]);

  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalContext.Provider value={TasksMemo}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </AnimatePresence>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default memo(MyApp);
