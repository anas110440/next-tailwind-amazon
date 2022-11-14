import React from 'react';
import styles from './styles.module.css';
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};

export default Loader;
