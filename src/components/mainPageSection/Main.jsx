import Section from "../section/Section";
import Container from "../container/Container";
import styles from "./mainPageSections.module.scss";
import SendLetterImg from "../../images/lettersend.png";
import Socials from "../socials/Socials";
import Title from "../mainTitle/MainTitle";
import Contacts from "../сontactInfoBlock/ContactInfoBlock";
import RadioButtons from "../radioButtonsGroup/RadioButtonsGroup";
import FormSection from "../formSection/FormSection";

function MainSection() {
  return (
    <Section id="main">
      <Container variant="containerMain">
        <Title />
        <div className={styles.formHolder}>
          <div className={styles.formHero}>
            <h2 className={styles.formTitle}>Contact Information</h2>
            <p className={styles.formText}>
              Say something to start a live chat!
            </p>

            <div className={styles.formItemsHolder}>
              <Contacts />
            </div>

            <div className={styles.formIconsHolder}>
              <Socials />
            </div>

            <div className={styles.formCirclesHolder}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <circle
                  cx="27"
                  cy="27"
                  r="27"
                  fill="#484848"
                  fillOpacity="0.5"
                />
              </svg>
            </div>

            <div className={styles.formCirclesHolderSecond}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="102"
                viewBox="0 0 80 102"
                fill="none"
              >
                <circle cx="96" cy="96" r="96" fill="#1A1A1A" />
              </svg>
            </div>
          </div>

          <form className={styles.formMain}>
            <FormSection />

            <div className={styles.Subject}>
              <RadioButtons />
              <div className={styles.sendImg}>
                <img src={SendLetterImg} alt="SendLetter" />
              </div>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}

export default MainSection;
