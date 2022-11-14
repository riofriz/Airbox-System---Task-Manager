import PropTypes from 'prop-types';
import React, { memo } from 'react';
import styles from './PaginationComponent.module.scss';

function PaginationComponent({ totalPages, setPage, page }) {
  return (
    <div className={styles.pagination}>
      {[...Array(totalPages).keys()].map((x) => (
        <span
          key={x}
          aria-hidden="true"
          className={`${styles.page} ${x + 1 === page && styles.active}`}
          onClick={() => setPage(x + 1)}
          onKeyDown={() => setPage(x + 1)}
        >
          {x + 1}
        </span>
      ))}
    </div>
  );
}

PaginationComponent.propTypes = {
  totalPages: PropTypes.number,
  setPage: PropTypes.func,
  page: PropTypes.number,
};

export default memo(PaginationComponent);
