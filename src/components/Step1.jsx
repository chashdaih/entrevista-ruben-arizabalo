import styles from "./SignupForm.module.css";

export default function Step1() {
  return (
    <section className={styles.step}>
      <h2>Personal Information</h2>

      <label>Preferred name:</label>
      <input type="text" />

      <label>Email address:</label>
      <input type="email" />
    </section>
  );
}
