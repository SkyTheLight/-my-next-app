import styles from "./shadow.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.orb} />
      <div className={styles.content}>
        <h1 className={styles.mainHeading}>Next app</h1>
        <p className={styles.subheading}>Welcome to my Next.js App</p>
        <p className={styles.tagline}>Homepage customized by Nico Angelo Par</p>
      </div>
    </div>
  );
}
