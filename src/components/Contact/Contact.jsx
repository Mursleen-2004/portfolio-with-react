import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 id="Head">Contact</h2>
        <p>Feel free connect me!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>

          <a href="musabukhari20@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email " />
          </a>
        </li>
        <li className={styles.link}>

          <a href="https://www.linkedin.com/in/mursleen-bukhari-322a86259/">

          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn"
          />
          </a>
        
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Mursleen-2004"  >
            <img src={getImageUrl("contact/githubIcon.png")}
              alt="Github" />
          </a>

        </li>
      </ul>
    </footer>
  );
};
