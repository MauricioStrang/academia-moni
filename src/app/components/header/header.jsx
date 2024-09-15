import Image from "next/image";
import styles from "./header.module.css" 
import Link from "next/link";

export default function Header() {
  return (

    <div className={styles.container}>


        <div className={styles.logoContainer}>
            <Image
                className={styles.logo} 
                src={'/logo1.png'} alt="search button"
                width={300} height={60} 
            />
        </div>

        <div className={styles.navLinks}>
            <div className={styles.homeLink}>
                <Link
                    href={'/'}
                >
                    Inicio</Link>
            </div>

            <div className={styles.aboutLink}>
                <Link
                    href={'/about'}
                >
                    Sobre la Academia</Link>
            </div>

            <div className={styles.coursesLink}>
                <Link
                    href={'/courses'}
                >
                    Cursos</Link>
            </div>

        </div>


        <div className={styles.userContainer}>
            <Image 
                className={styles.userBtn}
                src={'/user.png'} alt="user button"
                width={30} height={30} 
            />
            <p>Ingresar</p>
        </div>
    </div>
  );
}

