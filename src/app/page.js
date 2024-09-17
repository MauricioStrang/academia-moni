import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.sliderContainer}>
            <Image src='/slider.jpg' alt='' fill className={styles.sliderImg}/>
        </div>

        <div className={styles.mainContent}>
          <h1>fuck you</h1>
        </div>
    </div>
  );
}
