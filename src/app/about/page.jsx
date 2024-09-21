import styles from './about.module.css'

export const metadata = {
    title: "Sobre la Academia - Academia Moni",
    description: "Sobre mí",
  };


const AboutPage = ()=>{

    return(
        <div className={styles.container}>
            <h1>About Page</h1>
        </div>
    )
}

export default AboutPage;