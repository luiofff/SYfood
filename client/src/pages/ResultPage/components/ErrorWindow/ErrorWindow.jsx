import React from 'react'
import styles from "./ErrorWindow.module.css"

export default function ErrorWindow({ options }) {
  return (
    <>  
        <div className={styles.error_space}>
            <div className={styles.window}>
                <p className={styles.text}>Unfortunately, nothing was found for your query <span className={styles.options}>{options}</span>.<br/> Try to enter the name of the country whose cuisine you want to try.</p>
                <div className={styles.button_block}>
                    <a href="/" className={styles.button}>Back</a>
                </div>
            </div>
        </div>
    </>
  )
}
