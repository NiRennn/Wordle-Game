import React, { useEffect, useState } from "react";
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.head}>
        <h1>Настройки</h1>
      </div>

      <div className={styles.settingItem}>
        <div className={styles.left}>
          <span className={styles.leftTitle}>Темная тема</span>
          <span className={styles.leftDesc}>
            Сменить тему для лучшего восприятия
          </span>
        </div>
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider} />
        </label>
      </div> 

      <div className={styles.settingItem}>
        <div className={styles.left}>
          <span className={styles.leftTitle}>Хард-режим (4 попытки)</span>
          <span className={styles.leftDesc}>Угадай слово за 4 попытки</span>
        </div>

        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>
      
      <p>Created by Igor Kostolomov</p>

    </div>
  );
};

export default Settings;
