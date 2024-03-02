import React from "react";
import styles from "./Land.module.css";
export default function Land() {
  return (
    <>
      <div class={styles.landing}>
        <div class={styles.inttext}>
          <p class={styles.prag}>Never give up</p>
          <p class={styles.prag}>You’re almost there...</p>
          <p class={styles.span}>Come Join Us!</p>
          <a href="/Home" class={styles.joinNowButton}>
            Join Now
          </a>
        </div>
      </div>
    </>
  );
}
