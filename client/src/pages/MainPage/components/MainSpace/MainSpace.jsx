import React from 'react'
import styles from "./MainSpace.module.css"
import logo from "./assets/logoFood.svg"


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fff',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 5,
  borderRadius: 4
};



export default function MainSpace() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [query, setQuery] = React.useState("");


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
              <button onClick={handleOpen} className={styles.btn}>
                Выбрать свой рецепт
              </button>
            </div>
        </div>
      </section>
    </>
  )
}
