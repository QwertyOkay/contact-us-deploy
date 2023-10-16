import React from 'react';
import styles from '../menuMob/menuMob.module.scss';
import authorizeIcon from '../../images/Authorize.svg';
import ordersIcon from '../../images/Orders.svg';

const BurgerNav = () => {
  return (
    <div className={styles.headerDesk}>
      <div className={styles.burgerNavHolder}>
        <p className={styles.logoH}>Logo Here</p>
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
                  d="M5.46967 6.76978C5.76256 7.06267 6.23744 7.06267 6.53033 6.76978L11.3033 1.99681C11.5962 1.70392 11.5962 1.22904 11.3033 0.936151C11.0104 0.643258 10.5355 0.643258 10.2426 0.936151L6 5.17879L1.75736 0.936151C1.46447 0.643258 0.989593 0.643258 0.696699 0.936151C0.403806 1.22904 0.403806 1.70392 0.696699 1.99681L5.46967 6.76978ZM5.25 5.20813V6.23945H6.75V5.20813H5.25Z"
                  fill="#1F1F1F"
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
        <div className={styles.burgerIconsHolder}>
          <img src={authorizeIcon} alt="Authorize" />
          <img src={ordersIcon} alt="Orders" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <path
              opacity="0.75"
              d="M30.5 15.7689C30.5 24.2098 23.7762 31.0378 15.5 31.0378C7.2238 31.0378 0.5 24.2098 0.5 15.7689C0.5 7.32798 7.2238 0.5 15.5 0.5C23.7762 0.5 30.5 7.32798 30.5 15.7689Z"
              stroke="black"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="32"
            viewBox="0 0 31 32"
            fill="none"
          >
            <path
              opacity="0.75"
              d="M30.5 15.7689C30.5 24.2098 23.7762 31.0378 15.5 31.0378C7.2238 31.0378 0.5 24.2098 0.5 15.7689C0.5 7.32798 7.2238 0.5 15.5 0.5C23.7762 0.5 30.5 7.32798 30.5 15.7689Z"
              stroke="black"
            />
          </svg> */}
        </div>
      </div>
    </div>
  );
};

export default BurgerNav;
