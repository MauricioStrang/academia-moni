import styles from './profile.module.css'

export const metadata = {
    title: "Mi Perfil - Academia Moni",
    description: "Página de Perfil",
  };


const ProfilePage = ()=>{

    return(
        <div className={styles.container}>
            <h1>Profile Page</h1>
        </div>
    )
}

export default ProfilePage;