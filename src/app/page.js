import Image from "next/image";
import styles from "./home.module.css";


export const metadata = {
  description: "Home page",
};

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.sliderContainer}>
            <Image src='/slider.jpg' alt='' fill className={styles.sliderImg}/>
        </div>

        <div className={styles.mainContent}>
          
          <div className={styles.newsContainer}>
            <div className={styles.newsTitle}><h1>Campus News</h1></div>
            <div className={styles.newsContent}>
              <ul>
                <li>Inicio de clases</li>
                <li>inscripciones</li>
                <li>mesas de examenes</li>
                <li>penis</li>
              </ul> 
            </div>
          </div>
            

        </div>
    </div>
  );
}
