import Image from "next/image";
import styles from "./header.module.css" 
import Link from "next/link";

export default function Header() {


  return (


    <div className={styles.container}>

        <div className={styles.main}>  
            
            {/* This would be a moving text inside the banner */}
            <div className={styles.banner}>
                <h1 className={styles.bannerText}>Academia Moni: Enseñanza superior en ciencias médicas</h1>
            </div>

            <div className={styles.navLinks}>

                <div className={styles.logoContainer}>
                    <Image
                        className={styles.logo} 
                        src={'/logo1.png'} alt="search button"
                        width={300} height={60} 
                    />
                </div>
                <div className={styles.links}>
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

                    <div className={styles.contactLink}>
                        <Link
                            href={'/contact'}
                        >
                            Contactame</Link>
                    </div>

                    <div className={styles.noticeLink}>
                        <Link
                            href={'/notice'}
                        >
                            Noticias</Link>
                    </div>

                    <div className={styles.coursesLink}>
                        <Link
                            href={'/courses'}
                        >
                            Cursos</Link>
                    </div>
                    
                    <div className={styles.userLink}>

                        <Image 
                            className={styles.userBtn}
                            src={'/user.png'} alt="user button"
                            width={30} height={30} 
                        />  
                        <Link
                            href={'/user'}
                        >
                            Ingresar</Link>
                    </div>
                </div>

            </div> 
            
        </div>   
    </div>  
  );
}

