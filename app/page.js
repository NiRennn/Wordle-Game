"use client";

import Image from "next/image";
import styles from "./page.module.css";
import logo from "../public/Wordle_Logo.svg.png";
import Link from "next/link";
import { useMemo } from "react";

export default function HomePage() {
  const currentDate = useMemo(() => {
    const date = new Date();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, []);

  return (
    <div className={styles.HomePage__container}>
      <Image
        src={logo}
        alt="Wordle_Logo"
        className={styles.HomePage__logo}
      />
      <h1 className={styles.HomePage__title}>Wordle</h1>

      <h2 className={styles.HomePage__description}>
        Угадайте слово из 5-ти букв с 6 попыток.
      </h2>

      <div className={styles.HomePage__buttonContainer}>
        <Link href="/game">
          <button className={styles.HomePage__button}>Играть</button>
        </Link>
      </div>

      <div className={styles.HomePage__dateCreated}>
        {currentDate && <p>{currentDate}</p>}
        <p>Created by Igor Kostolomov</p>
      </div>
    </div>
  );
}
