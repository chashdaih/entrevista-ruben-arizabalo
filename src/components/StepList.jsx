import clsx from "clsx";

import styles from "./StepList.module.css";

function StepList({ activeStep }) {
  console.log("activeStep", activeStep);
  return (
    <ol className={styles.stepList}>
      <li
        className={clsx(
          styles.stepListItem,
          activeStep === 1 ? styles.active : ""
        )}
      >
        <span className={styles.stepNum}>1</span>
        Info
      </li>
      <li
        className={clsx(
          styles.stepListItem,
          activeStep === 2 ? styles.active : ""
        )}
      >
        <span className={styles.stepNum}>2</span>
        Plan
      </li>
      <li
        className={clsx(
          styles.stepListItem,
          activeStep === 3 ? styles.active : ""
        )}
      >
        <span className={styles.stepNum}>3</span>
        Summary
      </li>
    </ol>
  );
}

export default StepList;
