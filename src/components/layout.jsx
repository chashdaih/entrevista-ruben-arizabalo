// import clsx from "clsx";

import styles from "./SignupForm.module.css";
import StepList from "./StepList";

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <StepList activeStep={1} />
      </header>

      {children}

      <section className={styles.actions}>
        <button>Reset</button>
        <button>Continue »</button>
      </section>
    </div>
  );
}
