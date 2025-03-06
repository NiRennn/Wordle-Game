import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWord } from "../../store/wordSlice.js";
import styles from "./Friend.module.css";

function Friend({ onClose }) {
  const [word, setWordInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (word.length !== 5) {
      alert("Введите слово из 5 букв");
      return;
    } else if (!/^[а-яА-Я]+$/.test(word)) {
      alert("Введите слово на русском языке");
      return;
    }

    dispatch(setWord(word.toUpperCase()));

    onClose();
    setTimeout(() => {
      alert("Слово загадано!");
    }, 300);
  };
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Загадайте слово своему другу</h1>
      <p className={styles.text}>
        Введите слово, которое ваш друг должен угадать
      </p>
      <input
        type="text"
        className={styles.input}
        maxLength={5}
        value={word}
        placeholder="Введите слово из 5 букв"
        onChange={(e) => setWordInput(e.target.value)}
      />
      <button className={styles.button} onClick={handleSubmit}>
        Загадать
      </button>
    </div>
  );
}

export default Friend;
