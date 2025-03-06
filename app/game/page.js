"use client";

import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header/Header";
import Keyboard from "../components/keyboard/Keyboard";
import Modal from "../components/modal/Modal";
import styles from "./page.module.css";
import {
  setActiveRow,
  setActiveCell,
  updateRows,
  setKeyColors,
  updateKeyColor,
} from "../store/wordSlice";
import { useState, useEffect } from "react";
import Guide from "../components/guide/Guide";

function GamePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const dispatch = useDispatch();
  const { guess, rows, activeRow, activeCell, keyColors } = useSelector(
    (state) => state.word
  );

  const handleKeyPress = (key) => {
    const updatedRows = rows.map((row) => row.map((cell) => ({ ...cell })));
    const updatedKeyColors = { ...keyColors };
    
    if (key === "ВВОД") {
      if (activeCell === 5) {
        const currentWord = updatedRows[activeRow]
          .map((cell) => cell.letter)
          .join("");
  
        if (currentWord.length === 5) {
          const updatedKeyColors = { ...keyColors };
          const guessArray = guess.toUpperCase().split("");
          const usedIndices = [];
  
          updatedRows[activeRow].forEach((cell, index) => {
            if (cell.letter === guessArray[index]) {
              cell.color = "green";
              usedIndices.push(index);
              updatedKeyColors[cell.letter] = "green";
            }
          });
  
          updatedRows[activeRow].forEach((cell, index) => {
            if (!cell.color && guessArray.includes(cell.letter)) {
              const charIndex = guessArray.findIndex(
                (char, i) => char === cell.letter && !usedIndices.includes(i)
              );
              if (charIndex !== -1) {
                cell.color = "yellow";
                usedIndices.push(charIndex);
                updatedKeyColors[cell.letter] = "yellow";
              }
            }
          });
  
          updatedRows[activeRow].forEach((cell) => {
            if (!cell.color) {
              cell.color = "gray";
              updatedKeyColors[cell.letter] = "gray";
            }
          });
  
          updatedRows[activeRow].forEach((cell) => {
            cell.flipped = true;
          });
  
          dispatch(updateRows(updatedRows));
          dispatch(setKeyColors(updatedKeyColors));
  
          Object.keys(updatedKeyColors).forEach((key) => {
            dispatch(updateKeyColor({ key, color: updatedKeyColors[key] }));
          });
  
          setTimeout(() => {
            dispatch(setActiveRow(activeRow + 1));
            dispatch(setActiveCell(0));
          }, 600);
  
          if (currentWord === guess.toUpperCase()) {
            alert("Вы угадали слово!");
          } else if (activeRow === 5) {
            alert("Игра окончена! Загаданное слово: " + guess);
          }
        }
      }
    } else if (key === "BACKSPACE") {
      if (activeCell > 0) {
        updatedRows[activeRow][activeCell - 1] = {
          letter: "",
          color: "",
          flipped: false,
        };
        dispatch(setActiveCell(activeCell - 1));
      }
    } else if (/^[А-Яа-яЁё]$/.test(key) && activeCell < 5) {
      updatedRows[activeRow][activeCell] = {
        letter: key.toUpperCase(),
        color: "",
        flipped: false,
      };
      dispatch(setActiveCell(activeCell + 1));
    }
  
    dispatch(updateRows(updatedRows));
  };
  

  return (
    <div className={styles.GamePage}>
      <Header />
      <main className={styles.GamePage__main}>
        <div className={styles.GamePage__board}>
          {rows.map((row, rowIndex) => (
            <div className={styles.GamePage__row} key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`${styles.GamePage__cell} ${
                    cell.flipped ? styles.flip_horizontal_bottom : ""
                  } ${
                    cell.color === "green"
                      ? styles.GamePage__cell_green 
                      : cell.color === "yellow"
                      ? styles.GamePage__cell_yellow
                      : cell.color === "gray"
                      ? styles.GamePage__cell_gray
                      : ""
                  }`}
                  onAnimationEnd={() => {
                    cell.flipped = false;
                  }}
                >
                  {cell.letter}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Keyboard onKeyPress={handleKeyPress} keyColors={keyColors} />
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Guide />
      </Modal>
    </div>
  );
}

export default GamePage;
