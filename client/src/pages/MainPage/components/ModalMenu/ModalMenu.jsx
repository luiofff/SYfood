import React from "react"

import styles from "./ModalMenu.module.css"


export default function ModalMenu() {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal_part}>
                    <div className={styles.text_block}>
                        <span className={styles.title}>Кухня</span>
                        <p className={styles.pre_title}>Выберите страну, чью кухню вы хотите попробовать</p>
                    </div>
                </div>
            </div>
            <div className={styles.modal_back}>
            </div>
        </>
    )
}