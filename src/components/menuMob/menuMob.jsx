import styles from "./menuMob.module.scss";
import React, { useState } from "react";
import burgerImage from "../../images/burger.png";
import burgerIcons from "../../images/iconsHeader.png";
import Container from "../container/Container";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <Container variant="containerHeaderMob">
        <p className={styles.logoH}>Logo Here</p>
        <button
          className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <img src={burgerImage} alt="BurgerMenu" />
        </button>
      </Container>
      {isOpen && (
        <div className={styles.burgerDropdown}>
          <Container variant="containerMob">
            <div className={styles.burgerDropbox}>
              <p className={styles.logoHD}>Logo Here</p>
              <button
                className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
                onClick={toggleMenu}
              >
                <svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 20L4 4M20 4L4 20"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </svg>
              </button>
            </div>

            <div className={styles.burgerNavHolder}>
              <ul className={styles.burgerNav}>
                <li className={styles.burgerNavItem}>
                  <a href="/">Home</a>
                </li>
                <li className={styles.burgerNavItem}>
                  <a href="/">Features</a>
                  <button className={`${styles.burgerFeatures}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                    >
                      <path
                        d="M5.46967 6.56165C5.76256 6.85454 6.23744 6.85454 6.53033 6.56165L11.3033 1.78868C11.5962 1.49579 11.5962 1.02091 11.3033 0.728021C11.0104 0.435128 10.5355 0.435128 10.2426 0.728021L6 4.97066L1.75736 0.728021C1.46447 0.435128 0.989593 0.435128 0.696699 0.728021C0.403806 1.02091 0.403806 1.49579 0.696699 1.78868L5.46967 6.56165ZM5.25 5V6.03132H6.75V5H5.25Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </li>
                <li className={styles.burgerNavItem}>
                  <a href="/">Blog</a>
                </li>
                <li className={styles.burgerNavItem}>
                  <a href="/">Shop</a>
                </li>
                <li className={styles.burgerNavItem}>
                  <a href="/">About</a>
                </li>
                <li className={styles.burgerNavItem}>
                  <a href="/" className={styles.burgerNavItemLast}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.burgerIconsHolder}>
              <img src={burgerIcons} alt="Icons" />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Menu;
