import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Wordle-Emblem.png";
import styles from "./Header.module.css";
import questonImg from "../../../public/QuestionMark.svg";
import settingsImg from "../../../public/Settings.svg";
import plusCircleImg from "../../../public/PlusCircle.svg";
import menuImg from "../../../public/Menu.svg";

import { useState } from "react";
import Modal from "../modal/Modal";
import Guide from "../guide/Guide";
import Friend from "../friend/Friend";
import Settings from "../settings/Settings";

const Header = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const openModal = (contentType) => {
    setModalContent(contentType);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <header className={styles.Header__container}>
      <Link href="/">
        <Image
          src={logo}
          alt="Wordle Logo"
          className={styles.Header__logo}
        ></Image>
      </Link>
      <div className={styles.Header__right}>
        <button
          className={styles.Header__buttons}
          onClick={() => setModalContent("friend")}
        >
          <Image src={plusCircleImg} alt="NewWord"></Image>
        </button>
 
        <button
          className={styles.Header__buttons}
          onClick={() => setModalContent("faq")}
        >
          <Image src={questonImg} alt="FAQ"></Image>
        </button>
        <button
          className={styles.Header__buttons}
          onClick={() => setModalContent("settings")}
        >
          <Image src={settingsImg} alt="Settings"></Image>
        </button>
      </div>
      <button className={styles.MenuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image src={menuImg} alt="Menu" />
      </button>

      {isMenuOpen && (
        <div className={styles.DropdownMenu}>
          <button onClick={() => openModal("friend")}>Добавить слово</button>
          <button onClick={() => openModal("faq")}>Как играть?</button>
          <button onClick={() => openModal("settings")}>Настройки</button>
        </div>
      )}


      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent === "faq" && <Guide onClose={closeModal} />}
        {modalContent === "settings" && <Settings onClose={closeModal} />}
        {modalContent === "friend" && <Friend onClose={closeModal} />}
      </Modal>


      
    </header>
  );
};

export default Header;
