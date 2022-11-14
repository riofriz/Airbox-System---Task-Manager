import React, {
  useEffect, useState, useContext, memo,
} from 'react';
import Link from 'next/link';
import { paginateData } from '../../utils/data-manipulation';
import styles from './TasksComponent.module.scss';
import GlobalContext from '../../Contexts/GlobalContext';
import TasksPopupComponent from '../CreateTaskComponent';
import Pagination from '../PaginationComponent';

function TasksComponent() {
  const [showPopup, setShowPopup] = useState(false);
  const { tasks } = useContext(GlobalContext);
  const formatDate = (date) => new Date(date * 1000);
  const totalPages = Math.ceil(tasks.length / 6);
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(paginateData(tasks, page, 6));

  useEffect(() => {
    const paginated = paginateData(tasks, page, 6);
    setPaginatedData(paginated.data);
  }, [tasks, page]);

  return (
    <div className={styles.tasksComponent}>
      {paginatedData.length > 0
        && (
        <div className={styles.tasks}>
          {paginatedData.map((task) => (
            <div key={task._id} className={styles.task}>
              <div className={styles.date}>
                {`${formatDate(task.date).getDate()}/${formatDate(task.date).getMonth() + 1}/${formatDate(task.date).getFullYear()}`}
              </div>
              <div className={styles.top}>
                <div className="caller">
                  <strong>Caller:</strong>
                  {' '}
                  <Link passHref href={`/${task.organization}/caller/${task.caller}`}>
                    <span>
                      {task.caller}
                    </span>
                  </Link>
                </div>
                <div className={styles.org}>
                  <strong>Organization:</strong>
                  {' '}
                  <Link passHref href={`/organization/${task.organization}`}>
                    <span>
                      {task.organization}
                    </span>
                  </Link>
                </div>
              </div>

              <p className={styles.desc}>
                {task.taskDescription}
              </p>
            </div>
          ))}
        </div>
        )}

      <Pagination setPage={setPage} totalPages={totalPages} page={page} />

      <div className={styles.buttons}>
        <button type="button" className="button primary" onClick={() => setShowPopup(!showPopup)}>
          + Create Task
        </button>
      </div>

      {showPopup
        && <TasksPopupComponent showPopup={showPopup} setShowPopup={setShowPopup} />}
    </div>
  );
}

export default memo(TasksComponent);
