import FormInput from "../form/Form";
import styles from "./FormSection.module.scss";

function FormSection() {
  return (
    <div className={styles.formBox}>
      <div className={styles.formContainer}>
        <FormInput label="First name" name="firstName" placeholder="John" />
        <FormInput label="Last name" name="lastName" placeholder="Doe" />
        <FormInput
          label="Email"
          name="email"
          placeholder="johndoe@example.com"
        />
        <FormInput
          type="tel"
          label="Phone Number"
          id="phone"
          name="phone"
          placeholder="+1 012 3456 789"
          defaultValue="+1 012 3456 789"
        />
      </div>
    </div>
  );
}

export default FormSection;
