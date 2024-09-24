import styles from "./banner.module.css" 


const Banner =() =>{


  return (

    <div className={styles.container}>
        <div className={styles.banner}>
            <div className={styles.bannerTextContainer}>
                <h1 className={styles.bannerText}>Academia Moni: Enseñanza superior en ciencias médicas</h1>
            </div>
        </div> 
    </div> 

  );
}


export default Banner;