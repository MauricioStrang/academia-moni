import styles from './news.module.css'

export const metadata = {
    title: "Noticias - Academia Moni",
    description: "Página de Noticias",
  };


const NewsPage = ()=>{

    return(
        <div className={styles.container}>
            <h1>News Page</h1>
        </div>
    )
}

export default NewsPage;