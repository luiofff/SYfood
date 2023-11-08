import React from 'react'
import MainSpace from './components/MainSpace/MainSpace'
import SecondarySpace from "./components/SecondarySpace/SecondarySpace"
import style from "./MainPage.module.css"

import logo from "../MainPage/components/MainSpace/assets/logoFood.svg"



export default function MainPage() {
  return (
    <>
        <MainSpace />
        <SecondarySpace />
        <footer className={style.footer}>
            <img src={logo} className={style.logo} alt="" />
            <span className={style.company_title}>© 2023 SYtech company</span>
        </footer>
    </>
  )
}
