import React from 'react'
import styles from './Guide.module.css'

function Guide() {
  return (
    <div>
        <h1 className={styles.modalTitle}>Как Играть</h1>
        <h2 className={styles.modalSubtitle}>Угадай слово за 6 попыток</h2>
        
        <ul className={styles.modalList}>
          <li>Каждое слово состоит из 5 букв.</li>
          <li>После ввода слова цвет плиток изменится, показывая, насколько близко вы к правильному слову.</li>
        </ul>

        <h3 className={styles.modalExamples}>Примеры:</h3>
        <div className={styles.exampleRow}>
          <div className={`${styles.tile} ${styles.green}`}>О</div>
          <div className={styles.tile}>К</div>
          <div className={styles.tile}>Е</div>
          <div className={styles.tile}>А</div>
          <div className={styles.tile}>Н</div>
        </div>
        <p className={styles.exampleText}>Буква <strong>"О"</strong> на правильном месте.</p>

        <div className={styles.exampleRow}>
          <div className={styles.tile}>П</div>
          <div className={`${styles.tile} ${styles.yellow}`}>А</div>
          <div className={styles.tile}>Р</div>
          <div className={styles.tile}>О</div>
          <div className={styles.tile}>М</div>
        </div>
        <p className={styles.exampleText}>Буква <strong>"А"</strong> есть в слове, но в другом месте.</p>

        <div className={styles.exampleRow}>
          <div className={styles.tile}>П</div>
          <div className={styles.tile}>А</div>
          <div className={styles.tile}>Л</div>
          <div className={`${styles.tile} ${styles.gray}`}>К</div>
          <div className={styles.tile}>А</div>
        </div>
        <p className={styles.exampleText}>Буквы <strong>"К"</strong> нет в слове.</p>


    </div>
  )
}

export default Guide