import React from 'react'
import styles from "./ErrorWindow.module.css"

import ModalMenu from '../../../MainPage/components/ModalMenu/ModalMenu'
import { useDispatch, useSelector } from 'react-redux';
import { openModal} from '../../../../store/actionCreators/modalSlice';

export default function ErrorWindow({ options }) {

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.modalOpen);

  const handleOpenModal = () => {
    dispatch(openModal());
  };


  return (
    <>  
        <div className={styles.error_space}>
            <div className={styles.window}>
                <p className={styles.text}>Unfortunately, nothing was found for your query <span className={styles.options}>{options}</span>.<br/> Try to enter the name of the country whose cuisine you want to try.</p>
                <div className={styles.button_block}>
                    <button onClick={handleOpenModal} className={styles.button}>Search</button>
                </div>
            </div>
        </div>
        {isModalOpen && (
        <div>
          <ModalMenu />
        </div>
       )}
    </>
  )
}
