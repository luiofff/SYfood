import React from 'react'
import styles from "./MainSpace.module.css"
import logo from "./assets/logoFood.svg"

import { useDispatch, useSelector } from 'react-redux';
import { openModal} from '../../../../store/actionCreators/modalSlice';

import ModalMenu from '../ModalMenu/ModalMenu';

export default function MainSpace() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.modalOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

 


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
              <button onClick={handleOpenModal} className={styles.btn}>
                Выбрать свой рецепт
              </button>
            </div>
        </div>
      </section>
      {isModalOpen && (
        <div>
          <ModalMenu />
        </div>
      )}
    </>
  )
}
