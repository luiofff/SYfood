import React from 'react';
import styles from './LoaderPage.module.css';

const LoaderPage = () => {
  return (
    <>
        <div className={styles.loader_space}>
            <div className={styles.content}>
                <div className={styles.dot_spinner}>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                    <div className={styles.dot_spinner__dot}></div>
                </div>
                <span className={styles.load_title}>Looking for recipes</span>
            </div>
        </div>
    </>
    
  );
};

export default LoaderPage;
