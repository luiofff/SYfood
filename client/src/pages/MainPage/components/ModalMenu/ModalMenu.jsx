import React from "react";
import styles from "./ModalMenu.module.css";
import ClassNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../store/actionCreators/modalSlice';
import { updateStringData } from "../../../../store/actionCreators/dataSlice";
import { useNavigate } from 'react-router-dom';

export default function ModalMenu() {
    const dispatch = useDispatch();
    const history = useNavigate();
    const isModalOpen = useSelector((state) => state.modal.modalOpen);

    // Correct the selector to use the 'stringData' slice
    const queryString = useSelector(state => state.stringData.stringData);

    const handleChange = (event) => {
        dispatch(updateStringData(event.target.value));
        console.log(queryString);
    }

    const search = () => {
        // Navigate to the ResultPage with the query parameter
        history(`/recipes?query=${encodeURIComponent(queryString)}`);
     }


    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <>
            <div className={styles.modal}>
                <div className={ClassNames(styles.modal_part, styles.first_part)}>
                    <div className={styles.text_block}>
                        <span className={styles.title}>Что бы вы хотели поесть?</span>
                        <p className={styles.pre_title}>Напишите ваши мысли</p>
                    </div>
                </div>

                <div className={ClassNames(styles.modal_part, styles.second_part)}>
                    <div className={styles.input_block}>
                        <input type="text" className={styles.input} onChange={handleChange}/>
                        <div className={styles.button_block}>
                            <button onClick={search} className={styles.search_button}>
                                <svg width="20" height="15" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="8" width="26" height="6" rx="3" fill="white"/>
                                    <rect x="20.1338" width="14.0057" height="6" rx="3" transform="rotate(58.837 20.1338 0)" fill="white"/>
                                    <rect x="27.3145" y="10.0664" width="14.0057" height="6.13269" rx="3" transform="rotate(120 27.3145 10.0664)" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleCloseModal} className={styles.modal_back}></div>
        </>
    )
}
