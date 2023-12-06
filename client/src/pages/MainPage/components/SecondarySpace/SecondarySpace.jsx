import React from 'react'
import styles from "./SecondarySpace.module.css"


import f_image from "./assets/first.jpg"

import { useDispatch, useSelector } from 'react-redux';
import { openModal} from '../../../../store/actionCreators/modalSlice';


export default function MainSpace() {

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.modalOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <>
      <section className={styles.main_space}>

        <div className={styles.head_content}>
            <h1 className={styles.title}>Cook what you think about</h1>
            <div className={styles.pre_title_block}>
                <p className={styles.pre_title}>Write about what you would like to eat and AI will write you a recipe that may be suitable for you based on your thoughts.</p>
            </div>
        </div>

        <div className={styles.card_space}>
            <div className={styles.card}>
                <div className={styles.image_block}>
                    <img src={f_image} className={styles.image} alt="" />
                </div>
                <div className={styles.card_content_block}>
                    <h1 className={styles.card_title}>Hmm... I want something cheesy and Georgian today, which dish would you recommend to me?</h1>
                    <p className={styles.card_pre_title}>Well, I suggest cooking Khachapuri for you. They are a classic Georgian dish that combines cheese filling and crispy pastries...</p>
                    <button className={styles.btn} onClick={handleOpenModal}>
                        Try
                    </button>
                </div>
            </div>
        </div>
    
      </section>
    </>
  )
}
