import React from 'react'
import styles from "./MainSpace.module.css"
import logo from "./assets/logoFood.svg"




export default function MainSpace() {
  return (
    <>
      <section className={styles.main_space}>
        <div className={styles.content_part}>
            <div className={styles.block_content}>
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <div className={styles.block_content}>
                <span className={styles.secondary_txt}>Вкусное искусство выбора</span>
            </div>
            <div className={styles.block_content}>
                <button className={styles.btn}>
                    Выбрать свой Рецепт
                </button>
            </div>
        </div>
      </section>
    </>
  )
}
