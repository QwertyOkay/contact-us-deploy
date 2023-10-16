import FormInput from "../form/Form";
import styles from "./radioButtonsGroup.module.scss";

function RadioButtonsGroup() {
  return (
    <div>
      <h2 className={styles.subjectTitle}>Select Subject?</h2>
      <div className={styles.subjectForm}>
        <div className={styles.subjectRadioGroup}>
          <input
            type="radio"
            id="option1"
            name="subject"
            value="General Inquiry"
            defaultChecked
          />
          <label htmlFor="option1">General Inquiry</label>

          <input
            type="radio"
            id="option2"
            name="subject"
            value="General Inquiry"
          />
          <label htmlFor="option2">General Inquiry</label>

          <input
            type="radio"
            id="option3"
            name="subject"
            value="General Inquiry"
          />
          <label htmlFor="option3">General Inquiry</label>

          <input
            type="radio"
            id="option4"
            name="subject"
            value="General Inquiry"
          />
          <label htmlFor="option4">General Inquiry</label>
        </div>

        <div className={styles.inputContainer}>
          <FormInput
            id="Message"
            label="Message"
            name="message"
            placeholder="Write your message.."
            className={styles.labelForMessage}
          />
        </div>
        <div className={styles.buttonHolder}>
          <button type="submit" className={styles.subjectButton}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default RadioButtonsGroup;
