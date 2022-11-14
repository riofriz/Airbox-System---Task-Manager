/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */

import React, { useContext, useState, memo } from 'react';
import { PropTypes } from 'prop-types';
import styles from './CreateTaskComponent.module.scss';
import GlobalContext from '../../Contexts/GlobalContext';
import { getUniqueKey, getCallerFromOrganization } from '../../utils/data-manipulation';
import createTask from '../../utils/global-functions';

function TasksPopupComponent({ showPopup, setShowPopup }) {
  const [error, setError] = useState('');
  const [otherCaller, setOtherCaller] = useState('');
  const [callers, setCallers] = useState([]);
  const { tasks, setTasks } = useContext(GlobalContext);
  const organizations = getUniqueKey(tasks, 'organizationId');

  const removeOtherCaller = () => {
    setOtherCaller('');
    document.getElementById('caller').selectedIndex = 0;
  };

  return (
    <>
      <div className={styles.newTaskPopup}>
        {organizations.length > 0
        && (
        <form onSubmit={(e) => createTask(e, setTasks, setShowPopup, setError)}>
          <fieldset>
            <label htmlFor="org">Organization</label>
            <select name="organization" id="org" onChange={(e) => setCallers(getCallerFromOrganization(tasks, 'caller', e.target.value))} required>
              <option value="">Select Organization</option>
              {organizations.map((org) => (
                <option key={org} value={org}>
                  Org
                  {org}
                </option>
              ))}
            </select>
          </fieldset>

          {callers.length > 0
          && (
            <>
              <fieldset>
                <label htmlFor="caller">Caller</label>
                <select name="caller" id="caller" defaultValue="" onChange={(e) => setOtherCaller(e.target.value)} required>
                  <option value="">
                    Choose a caller
                  </option>
                  {callers.map((caller) => (
                    <option key={caller} value={caller}>
                      {caller}
                    </option>
                  ))}
                  <option value="other">
                    Other
                  </option>
                </select>
                {otherCaller === 'other'
              && (
              <>
                <input type="text" placeholder="Enter a new caller" name="othercaller" id="othercaller" required />
                <button className={styles.removeOtherCaller} type="button" onClick={() => removeOtherCaller()}>X</button>
              </>
              )}
              </fieldset>

              <fieldset>
                <label htmlFor="taskDescription">Task Description</label>
                <textarea
                  placeholder="Task Description"
                  name="taskDescription"
                  id="taskDescription"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
                />
              </fieldset>
            </>
          )}

          {error
          && (
          <div className="error">
            {error}
          </div>
          )}

          {callers.length > 0
          && (
          <fieldset className={styles.buttons}>
            <button type="submit" className="button primary">
              Submit
            </button>
          </fieldset>
          )}
        </form>
        )}
      </div>

      <button type="button" className={styles.overlay} onClick={() => setShowPopup(!showPopup)}>.</button>
    </>
  );
}

TasksPopupComponent.propTypes = {
  showPopup: PropTypes.bool,
  setShowPopup: PropTypes.func,
};

export default memo(TasksPopupComponent);
