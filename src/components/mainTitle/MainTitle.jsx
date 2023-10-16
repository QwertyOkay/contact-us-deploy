import styles from './MainTitle.module.scss';

function Title() {
  return (
    <div className={styles.textWrap}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.text}>
        Any question or remarks? Just write us a message!
      </p>
    </div>
  );
}

export default Title;
