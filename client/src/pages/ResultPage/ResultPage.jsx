import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from "./ResultPage.module.css";
import classNames from "classnames";
import {Tooltip} from '@gravity-ui/uikit';

export default function ResultPage() {
  const [title, setTitle] = useState("");
  const [title_full, setTitle_full] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [index, setIndex] = useState(0);
  const [max, setMax] = useState(0);
  const [array, setArray] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: { query: query },
    headers: {
      'X-RapidAPI-Key': '4c0913e8fbmshee3d5797b276796p1dabc3jsnd83be6ecfb8b',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      setArray(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const next = () => {
    if (index < array.length - 1) {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    getData();
  }, [query]); // Извлекать данные при изменении запроса

  useEffect(() => {
    setMax(array.length);

    if (array.length > 0) {
      if (array[index].title.length > 17) {
        setTitle_full(array[index].title);
        setTitle(array[index].title.slice(0, 17) + "...");
      } else {
        setTitle(array[index].title);
      }
      setIngredients(array[index].ingredients);
      setInstructions(array[index].instructions);
    }
  }, [index, array]);

  return (
    <>
      <header className={classNames(styles.header, styles.desktop)}>
        {index > 0 ? (
          <button className={styles.nav_button} onClick={back}>
            <span>←</span>
            <span className={styles.button_title}>Предыдущий</span>
          </button>
        ) :
        (
            <button className={styles.nav_button}>
            </button> 
        )}

        <Tooltip content={<h1 className={styles.title}>{title_full}</h1>}>
            <div tabIndex={0}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </Tooltip>

        {index < array.length - 1 ? (
            <button className={styles.nav_button} onClick={next}>
                <span className={styles.button_title}>Следующий</span>
                <span>→</span>
            </button>
        ) :
        (
            <button className={styles.nav_button}>
            </button>
        )}
      </header>

      {/* mobile */}

      <Tooltip content={<h1 className={styles.title}>{title_full}</h1>}>
            <div tabIndex={0} className={styles.title_mobile_block}>
                <h1 className={styles.title}>{title}</h1>
            </div>
      </Tooltip>

      <header className={classNames(styles.header, styles.mobile)}>
        {index > 0 ? (
          <button className={styles.nav_button} onClick={back}>
            <span className={styles.arrow}>←</span>
            <span className={styles.button_title}>Предыдущий</span>
          </button>
        ) :
        (
            <button className={styles.nav_button}>
            </button> 
        )}

        {index < array.length - 1 ? (
            <button className={styles.nav_button} onClick={next}>
                <span className={styles.button_title}>Следующий</span>
                <span className={styles.arrow}>→</span>
            </button>
        ) :
        (
            <button className={styles.nav_button}>
            </button>
        )}
      </header>

      <section className={styles.content}>
        <div className={styles.content_block}>
          <h1>Ингредиенты</h1>
          <p>{ingredients}</p>
        </div>
        <div className={styles.content_block}>
          <h1>Инструкции</h1>
          <p>{instructions}</p>
        </div>
      </section>
    </>
  )
}
