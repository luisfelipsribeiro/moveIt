import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/luisfelipsribeiro.png" alt="Luis Felipe"></img> 
            <div>
                <strong> Luis Felipe</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div> 
        </div>
    );
}