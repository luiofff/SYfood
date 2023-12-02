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
            <h1 className={styles.title}>Готовь то, о чем думаешь</h1>
            <div className={styles.pre_title_block}>
                <p className={styles.pre_title}>Напишите о том, что вы хотели бы поесть и AI напишет вам рецепт, который может подойти для вас исходя из мыслей.</p>
            </div>
        </div>

        <div className={styles.card_space}>
            <div className={styles.card}>
                <div className={styles.image_block}>
                    <img src={f_image} className={styles.image} alt="" />
                </div>
                <div className={styles.card_content_block}>
                    <h1 className={styles.card_title}>Хмм... Хочется сегодня что-нибудь сырного и грузинского, какое блюдо ты бы постоветовал мне?</h1>
                    <p className={styles.card_pre_title}>Хорошо, для вас я предлагаю приготовить "Хачапури". Они являются классическим грузинским блюдом, которое сочетает в себе сырную начинку и хрустящую выпечку...</p>
                    <button className={styles.btn} onClick={handleOpenModal}>
                        Попробовать
                    </button>
                </div>
            </div>
        </div>
    
      </section>
    </>
  )
}
