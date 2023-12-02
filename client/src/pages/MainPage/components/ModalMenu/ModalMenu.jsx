import React from "react"

import styles from "./ModalMenu.module.css"

import axios from 'axios';

import ClassNames from "classnames"

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../store/actionCreators/modalSlice';



export default function ModalMenu() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.modalOpen);
    const [userQuery, setUserQuery] = React.useState("");

    const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: {
          query: userQuery
        },
        headers: {
          'X-RapidAPI-Key': '4c0913e8fbmshee3d5797b276796p1dabc3jsnd83be6ecfb8b',
          'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    const getData = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
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
                        <input type="text" className={styles.input} onChange={(e) => setUserQuery(e.target.value)}/>
                        <div className={styles.button_block}>
                            <button className={styles.search_button} onClick={getData}>
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
            <div onClick={handleCloseModal} className={styles.modal_back}>
            </div>
        </>
    )
}