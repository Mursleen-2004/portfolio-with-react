import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Mursleen </h1>
        <p className={styles.description}>
         A Dedicated and innovative web developer with expertise in the MERN stack. With a strong foundation in MongoDB, Express.js, React.js, and Node.js,
        
        </p>
        <a href="https://www.linkedin.com/in/mursleen-bukhari-322a86259/" className={styles.contactBtn}>
          Connect Me
        </a>
      </div>
      <img
        src="/musa2.jpg"       
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
