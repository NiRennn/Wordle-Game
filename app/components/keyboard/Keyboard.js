import React from "react";
import styles from "./Keyboard.module.css";
import Image from "next/image";

import backspaceIcon from "../../../public/Backspace.svg";

const Keyboard = ({ onKeyPress, keyColors }) => {
  const topRow = ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"];
  const middleRow = ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"];
  const bottomRow = ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"];

  const handleClick = (key) => {
    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  const getKeyClass = (key) => {
    const color = keyColors ? keyColors[key.toUpperCase()] : undefined;
    if (color === "green") return styles.Keyboard__button_green;
    if (color === "yellow") return styles.Keyboard__button_yellow;
    if (color === "gray") return styles.Keyboard__button_gray;
    return '';
  };
  

  return (
    <div className={styles.Keyboard}>
      <div className={styles.Keyboard__row}>
        {topRow.map((key) => (
          <button
            key={key}
            className={`${styles.Keyboard__button} ${getKeyClass(key)}`}
            onClick={() => handleClick(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
      <div className={styles.Keyboard__row}>
        {middleRow.map((key) => (
          <button
            key={key}
            className={`${styles.Keyboard__button} ${getKeyClass(key)}`}
            onClick={() => handleClick(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>
      <div className={styles.Keyboard__row}>
        <button
          className={styles.Keyboard__button}
          onClick={() => handleClick("ВВОД")}
        >
          ВВОД
        </button>
        {bottomRow.map((key) => (
          <button
            key={key}
            className={`${styles.Keyboard__button} ${getKeyClass(key)}`}
            onClick={() => handleClick(key)}
          >
            {key.toUpperCase()}
          </button>
        ))}
        <button
          className={styles.Keyboard__button}
          onClick={() => handleClick("BACKSPACE")}
        >
          <Image src={backspaceIcon} alt="Backspace" />
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
