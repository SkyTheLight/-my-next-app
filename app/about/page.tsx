import Link from "next/link";
import styles from "../shadow.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.orb} />
      <div className={styles.content}>
        <h1 className={styles.aboutHeading}>About This Project</h1>
        <p className={styles.aboutText}>
          This page is all about our Next.js project.
        </p>
        <Link href="/" className={styles.backLink}>Back to Home</Link>
      </div>
    </div>
  );
}
